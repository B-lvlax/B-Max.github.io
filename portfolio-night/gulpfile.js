'use strict';

var
  gulp = require('gulp'),
  concatCSS = require('gulp-concat-css'),
  notify = require('gulp-notify'),
  minify = require('gulp-minifier'),
  rename = require('gulp-rename'),
  prefix = require('gulp-autoprefixer'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  jade = require('gulp-jade'),
  rimraf = require('rimraf'),
  svgSprite = require('gulp-svg-sprites'),
  concatJS = require('gulp-concat'),
  gulpSync = require('gulp-sync')(gulp);


/* DEFAULT
=====================================================================*/
gulp.task('default', gulpSync.sync([
  'clean',
  ['sprite', 'normalize', 'img', 'moveFonts', 'jquery', 'sass'],
  ['jade', 'css', 'scripts'],
  'serve'
]));


/* CLEAN
=====================================================*/
gulp.task('clean', function (cb) {
  rimraf('build/', cb);
});

gulp.task('cleanSprite', function (cb) {
  rimraf('src/img/svg/', cb);
});

gulp.task('cleanImg', function (cb) {
  rimraf('build/img', cb);
});


/* SERVE & WATCHER
=====================================================*/
gulp.task('serve', function () {
  browserSync.init({
    open: false,
    // browser: 'Vivaldi',
    server: 'build/',
    tunnel: true
  });

  gulp.watch('src/markup/**/*.jade', ['jade']);
  gulp.watch('src/styles/**/*.sass', ['sass', 'css']);
  gulp.watch('src/img/*.*', ['cleanImg', 'img']);
  gulp.watch('src/img/allSvg/*.svg', ['cleanSprite', 'sprite']);
  gulp.watch('src/scripts/**/*.js', ['scripts']);
});


/* TEMPLATES
=====================================================*/
gulp.task('jade', function () {
  return gulp.src('src/markup/*.jade')
    .pipe(jade({
      pretty: true
    }).on('error', notify.onError(function (error) {
      return {
        title: 'JADE',
        message: error.message
      };
    })))
    .pipe(gulp.dest('build/'))
    .on('end', browserSync.reload);
});


/* STYLES
=====================================================*/
gulp.task('sass', function () {
  return gulp.src('src/styles/main.sass')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', notify.onError(function (error) {
      return {
        title: 'SASS',
        message: error.message
      };
    })))
    .pipe(prefix({
      browsers: ['last 2 version', '> 1%', 'ie 11', 'Opera 12.1'],
      cascade: true
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({
        stream: true
      }));
});

gulp.task('css', function () {
  return gulp.src(['build/css/*.css', '!build/css/bundle.min.css'])
    .pipe(concatCSS('bundle.css'))
    .pipe(minify({
      minify: true,
      minifyCSS: true
    }))
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('normalize', function () {
  return gulp.src('bower_components/normalize-css/normalize.css')
    .pipe(rename('01-normalize.css'))
    .pipe(gulp.dest('build/css/'));
});


/* FONTS
=====================================================*/
gulp.task('moveFonts', function () {
  return gulp.src('src/fonts/*.*')
    .pipe(gulp.dest('build/fonts/'));
});


/* SCRIPTS
=====================================================*/
gulp.task('scripts', function () {
  return gulp.src(['src/scripts/*.js', '!src/scripts/jquery.min.js', '!all.min.js'])
    .pipe(gulp.dest('build/js/'))
    .pipe(sourcemaps.init())
    .pipe(minify({
      minify: true,
      minifyJS: true
    }))
    .pipe(concatJS('all.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/js/'))
    .on('end', browserSync.reload);
});

gulp.task('jquery', function () {
  return gulp.src('bower_components/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('build/js/'));
});


/* IMAGES
=====================================================*/
gulp.task('img', function () {
  return gulp.src('src/img/**/*.*')
    .pipe(gulp.dest('build/img/'))
    .on('end', browserSync.reload);
});

gulp.task('sprite', function () {
  return gulp.src('src/img/allSvg/*.svg')
    .pipe(svgSprite({
      mode: "symbols",
      preview: false
        // selector: 'icon-%f'
    }))
    .pipe(gulp.dest('src/img/'))
    .on('end', browserSync.reload);
});
