/*sourceType: module*/
'use strict'
// *************************************
//
//   Gulpfile
//
// *************************************
//
// Available tasks:
//   `gulp`
//   `gulp serve`
//   `gulp compile:babel`
//   `gulp compile:postcss`
//   `gulp minify:css`
//   `gulp minify:js`
//
// *************************************

import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
const $ = gulpLoadPlugins()

import path from 'path'
import autoprefixer from 'autoprefixer'
import browserSync from 'browser-sync'
import del from 'del'
import nunjucksRender from 'gulp-nunjucks-render'
import runSequence from 'run-sequence'
import precss from 'precss'
import cssnano from 'cssnano'
import gifsicle from 'imagemin-gifsicle'
import jpegtran from 'imagemin-jpegtran'
import pngquant from 'imagemin-pngquant'
import chalk from 'chalk'
import svgo from 'imagemin-svgo'

const reload = browserSync.reload

// Set up environments
const tasks = {
    development: ['serve'],
    production: ['build']
}

// Console Colors
const cErr = chalk.red
  ,cInfo = chalk.dim.gray
  ,cTask = chalk.bold.green

// file source and destination variables

// HTML & nunjucks files
const nunjucksSrc  = 'source/pages/**/*.+(html|nunjucks)'

// Images
const imgSrc       = 'source/img/**/*'
const imgDest      = 'build/img'

// Stylesheets
const cssSrc       = 'source/css/*.pcss'
const cssDest      = 'build/css'

// Sripts
// const jsSrc        = 'source/js/*.js';
// const jsDest       = 'build/js';
const jsVendorSrc  = 'source/js/vendor/*.js'
const jsVendorDest = 'build/js/vendor'

// Handle errors
function handleError(err) {
    console.log(cErr(err.toString()))
    this.emit('end')
}

const options = {
    build : {},
    localServerConfig: {
        server: { baseDir: './build'}
    ,open: false
    ,notify: false
    },
    images: {
        optimizationLevel: 7
        ,progressive: true
        ,interlaced: true
        ,multipass: true
        ,svgoPlugins: [{ removeViewBox: false }]
        ,use: [pngquant(), jpegtran(), gifsicle()]
    },
    js : {},
    css : {
        processors: {
            dev: [precss],
            prod: [
                precss,
                autoprefixer({browsers: ['last 2 versions']}),
                cssnano
            ]
        }
    }
}

// -------------------------------------
//   Task: Serve
// -------------------------------------

gulp.task('serve', ['build:dev'], () => {
    browserSync(options.localServerConfig)

    gulp.watch('source/img/**/*', ['images'], reload)
    gulp.watch('source/css/**/*.pcss', ['styles'])
    gulp.watch([
        'source/templates/*.nunjucks'
        ,'source/js/**/*.js'
        ,'source/pages/*.html'
        ,'source/data/*.json'
    ], ['html'])
  // gulp.watch("source/pages/*.html", ['html']);
  // gulp.watch("source/js/**/*.js", ['html']);
})

// -------------------------------------
//   Task: Styles
// -------------------------------------

gulp.task('styles', () => {
    return gulp.src(cssSrc)
    .pipe($.plumber({errorHandler: handleError}))
    .pipe($.newer(cssDest))
    .pipe($.environments.development($.sourcemaps.init()))
    .pipe($.environments.development($.postcss(options.css.processors.dev)))
    .pipe($.environments.production($.postcss(options.css.processors.prod)))
    .pipe($.environments.development($.sourcemaps.write('.')))
    .pipe($.rename('master.css'))
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.stream())
})


// -------------------------------------
//   Task: Scripts
// -------------------------------------

gulp.task('scripts', () => {
    return gulp.src(jsSrc)
    .pipe($.plumber())
    .pipe($.newer(jsSrc))
    .pipe($.environments.development($.sourcemaps.init()))
    .pipe($.babel())
    .pipe($.plumber.stop())
    .pipe($.concat('main.js')) // concat pulls all our files together before minifying them
    .pipe($.environments.development($.sourcemaps.write('.')))
    .pipe(gulp.dest(jsDest))
    .pipe(reload({stream: true}))
})

// -------------------------------------
//   Task: Scripts:dev
// -------------------------------------

gulp.task('scripts:dev', () => {
    return gulp.src(jsVendorSrc)
    .pipe(gulp.dest(jsVendorDest))
    .pipe(reload({stream: true}))
})

// -------------------------------------
//   Task: Images
// -------------------------------------

gulp.task('images', () => {
    return gulp.src(imgSrc)
    .pipe($.newer(imgDest))
    .pipe($.environments.production($.imagemin(options.images)))
    .pipe(gulp.dest(imgDest))
    .pipe($.size({ title: 'images'}))
})

// -------------------------------------
//   Task: HTML
// -------------------------------------

nunjucksRender.nunjucks.configure(['source/templates/'], {watch: false})
gulp.task('html', () => {
  // Use hosted CDN for production and local files during dev
    const dataSource = $.environments.production() ?
    './source/data/data.cdn.json' : './source/data/data.dev.json'
    return gulp.src(nunjucksSrc)
    .pipe($.plumber({errorHandler: handleError}))
    .pipe($.data(() => { return require(dataSource) }))
    .pipe(nunjucksRender())
    .pipe($.useref())
    .pipe($.if('*.js', $.babel()))
    .pipe(gulp.dest('build'))
    .pipe(reload({stream: true}))
    .pipe($.size({ title: 'html' }))
})

// -------------------------------------
//   Task: Clean
// -------------------------------------

gulp.task('clean', del.bind(null, 'build/*', {
    dot: true
}))

// -------------------------------------
//   Task: Build
// -------------------------------------

gulp.task('build', (callback) => {
    runSequence('clean', ['html', 'scripts:dev', 'images', 'styles'], 'zip',
    callback)
})

gulp.task('zip', () => {
    return gulp.src('build/**/*')
        .pipe($.zip(`${path.basename(__dirname)}.zip`))
        .pipe(gulp.dest('dispatch'))
})

// -------------------------------------
//   Task: Build:dev
// -------------------------------------

gulp.task('build:dev', (callback) => {
    runSequence('clean', ['html', 'images', 'styles', 'scripts:dev'],
    callback)
})

// -------------------------------------
//   Task: Default
// -------------------------------------

gulp.task('default', tasks[process.env.NODE_ENV])
