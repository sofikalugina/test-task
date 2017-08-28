'use strict';

const gulp = require('gulp'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify'),
    myth = require('gulp-myth'),
    stylus = require('gulp-stylus'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require("gulp-rename"),
    notify = require('gulp-notify'),
    // minifyCSS = require('gulp-minify-css'),
    inject = require('gulp-inject');

const scripts = require('./scripts'),
      styles = require('./styles');

var devMode = false;

gulp.task('stylus', function () {
    gulp.src('app/assets/stylus/*.styl')
        .pipe(sourcemaps.init())
        .pipe(stylus()) // собираем stylus
        .pipe(sourcemaps.write())
        .on('error', console.log) // Если есть ошибки, выводим и продолжаем
        .pipe(myth()) // добавляем префиксы - http://www.myth.io/
        .pipe(gulp.dest('./app/assets/css/')); // записываем css
});

gulp.task('css', function () {
    gulp.src(styles)
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('js', function () {
    gulp.src(scripts)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('html', function () {
    gulp.src('./app/templates/**/**/*.html')
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('assets', function () {
    gulp.src('./app/**/**/*.json')
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('build', function () {
    gulp.start(['stylus', 'css', 'js', 'html', 'assets'])
});

gulp.task('browser-sync', function () {
    browserSync.init(null, {
        open: false,
        server: {
            baseDir: 'dist'
        }
    });
});

gulp.task('start', function () {
    devMode = true;
    gulp.start(['build', 'browser-sync']);
    gulp.watch(['./app/assets/stylus/*.styl'], ['stylus']);
    gulp.watch(['./app/assets/css/*.css'], ['css']);
    gulp.watch(['./app/**/**/*.js'], ['js']);
    gulp.watch(['./app/templates/**/*.html'], ['html']);
    gulp.watch(['./app/**/**/*.json'], ['assets']);
});

