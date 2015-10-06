var gulp = require('gulp');

var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var browserSync = require('browser-sync');

// Static Server + watching scss/html files
gulp.task('serve', ['html', 'images', 'scripts', 'scripts-vendor', 'css'], function() {

  browserSync.init({
    server: "./build"
  });

  gulp.watch("source/img/*", ['images']);
  gulp.watch("source/stylus/*.styl", ['css']);
  gulp.watch("source/*.html", ['html']);
  gulp.watch("source/js/*.js", ['scripts']);
  gulp.watch("source/js/vendor/*.js", ['scripts-vendor']);
});

// Compile stylus into CSS & auto-inject into browsers
gulp.task('css', function() {
  return gulp.src("source/stylus/*.styl")
    .pipe(stylus({
      compress: false,
      paths: ['source/stylus']
    }))
    .pipe(autoprefixer({
      browsers:['last 2 versions', 'ie 8', 'ie 9']
    }))
    // .pipe(minifyCSS())
    .pipe(rename('master.css'))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream());
});

// Concat and minify scripts
gulp.task('scripts', function() {
  gulp.src('source/js/*.js')
    .pipe(concat('main.js')) // concat pulls all our files together before minifying them
    // .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Copy images from source to build
gulp.task('images', function() {
  return gulp.src('source/img/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: true}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('build/img'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Concat and minify vendor scripts
gulp.task('scripts-vendor', function() {
  gulp.src(['source/js/vendor/jquery*', 'source/js/vendor/*.js'])
    .pipe(concat('vendor.min.js')) // concat pulls all our files together before minifying them
    .pipe(uglify())
    .pipe(rename('vendor.min.js'))
    .pipe(gulp.dest('build/js/vendor'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('html', function() {
  gulp.src('source/*.html')
    .pipe(gulp.dest('build'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('default', ['serve']);
