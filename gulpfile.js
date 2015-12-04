'use strict';

var gulp         = require('gulp'),
  $              = require('gulp-load-plugins')({pattern: '*'}),
  del            = require('del'),
  runSequence    = require('run-sequence'),
  browserSync    = require('browser-sync'),
  reload         = browserSync.reload;

// file source and destination variables

// HTML & nunjucks files
var nunjucksSrc  = 'source/pages/**/*.+(html|nunjucks)';

// Images
var imgSrc       = 'source/img/**/*';
var imgDest      = 'build/img';

// Stylesheets
var cssSrc       = 'source/stylus/*.styl';
var cssDest      = 'build/css';

// Sripts
var jsSrc        = 'source/js/*.js';
var jsDest       = 'build/js';
var jsVendorSrc  = 'source/js/vendor/*.js';
var jsVendorDest = 'build/js/vendor';

// Handle errors
function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

var AUTOPREFIXER_BROWSERS = [
  'ie >= 10',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 7',
  'opera >= 23',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

// Static Server + watching stylus/html/js/image files
gulp.task('serve', ['build'], function() {

  browserSync.init({
    notify: false,
    server: "./build"
  });

  gulp.watch("source/img/**/*", ['images'], reload);
  gulp.watch("source/stylus/**/*.styl", ['css']);
  gulp.watch("source/pages/*.html", ['nunjucks']);
  gulp.watch("source/templates/*.nunjucks", ['nunjucks']);
  gulp.watch("source/js/*.js", ['scripts']);
  gulp.watch("source/js/vendor/*.js", ['scripts-vendor']);
});

// Compile Stylus into CSS, add vendor prefixes & auto-inject into browser
gulp.task('css', function() {
  return gulp.src(cssSrc)
    .pipe($.plumber({errorHandler: handleError}))
    .pipe($.newer(cssDest))
    .pipe($.stylus({
      compress: true,
      paths: ['source/stylus']
    }))
    .pipe($.autoprefixer({browsers: AUTOPREFIXER_BROWSERS}))
    .pipe($.rename('master.css'))
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.stream());
});

// Concatenate scripts (we don't minify these)
gulp.task('scripts', function() {
  return gulp.src(jsSrc)
    .pipe($.newer(jsSrc))
    .pipe($.concat('main.js')) // concat pulls all our files together before minifying them
    .pipe(gulp.dest(jsDest))
    .pipe(reload({
      stream: true
    }));
});

// Copy and optimise images from source to build
gulp.task('images', function() {
  return gulp.src(imgSrc)
    .pipe($.newer(imgDest))
    .pipe($.imagemin({
      optimizationLevel: 7,
      progressive: true,
      interlaced: true,
      multipass: true,
      svgoPlugins: [{
        removeViewBox: true
      }]
    }))
    .pipe(gulp.dest(imgDest))
    .pipe($.size({
      title: 'images'
    }));
});

// Copy changed vendor scripts to build dir
gulp.task('scripts-vendor', function() {
  return gulp.src(jsVendorSrc)
    .pipe($.newer(jsVendorDest))
    .pipe(gulp.dest(jsVendorDest))
    .pipe($.browserSync.reload({
      stream: true
    }));
});


// compile nunjucks templates
$.nunjucksRender.nunjucks.configure(['source/templates/'], {watch: false});
gulp.task('nunjucks', function() {
  return gulp.src(nunjucksSrc)
    .pipe($.plumber({errorHandler: handleError}))
    // add data nunjucksRender
    .pipe($.data(function() {
      return require('./source/data.json')
    }))
    .pipe($.nunjucksRender())
    .pipe(gulp.dest('build'))
    .pipe($.browserSync.reload({
      stream: true
    }));
});

// gulp.task('clean', function() {
//     $.del(['build/'] );
// });

gulp.task('clean', del.bind(null, 'build/*', {
  dot: true
}));

gulp.task('build', function(callback) {
  runSequence('clean', ['nunjucks', 'images', 'scripts', 'scripts-vendor', 'css'],
    callback);
});

gulp.task('default', ['serve']);
