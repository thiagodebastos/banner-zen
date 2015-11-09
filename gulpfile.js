'use strict';

var gulp        = require('gulp'),
    $           = require('gulp-load-plugins')({pattern:'*'}),
    del         = require('del'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

// file source and destination variables

// HTML files
var htmlSrc      = 'source/**/*.html';
var htmlDest     = 'build';

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

// Static Server + watching stylus/html/js/image files
gulp.task('serve', ['build'], function() {

  browserSync.init({
    notify: false,
    server: "./build"
  });

  gulp.watch("source/img/**/*", ['images'], reload);
  gulp.watch("source/stylus/**/*.styl", ['css']);
  gulp.watch("source/*.html", ['html']);
  gulp.watch("source/js/*.js", ['scripts']);
  gulp.watch("source/js/vendor/*.js", ['scripts-vendor']);
});

// Compile Stylus into CSS, add vendor prefixes & auto-inject into browser
gulp.task('css', function() {
  return gulp.src(cssSrc)
    .pipe($.plumber({ errorHandler: handleError }))
    .pipe($.newer(cssDest))
    .pipe($.stylus({
      compress: false,
      paths: ['source/stylus']
    }))
    .pipe($.autoprefixer({
      browsers: ['last 4 versions', 'ie 8', 'ie 9']
    }))
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
        svgoPlugins: [{removeViewBox: true}]
    }))
    .pipe(gulp.dest(imgDest))
    .pipe($.size({title: 'images'}));
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

// copy all html files to output directory
gulp.task('html', function() {
  return gulp.src('source/*.html')
    .pipe($.newer(htmlDest))
    .pipe(gulp.dest('build'))
    .pipe($.browserSync.reload({
      stream: true
    }));
});

// gulp.task('clean', function() {
//     $.del(['build/'] );
// });

gulp.task('clean', del.bind(null, 'build/*', {dot: true}));

gulp.task('build', function(callback) {
  runSequence('clean', ['html', 'images', 'scripts', 'scripts-vendor', 'css'],
                      callback);
});

gulp.task('default', ['serve']);
