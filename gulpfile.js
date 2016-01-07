'use strict';

var gulp       = require('gulp');
var sass       = require('gulp-sass');
var cssnano    = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var rename     = require('gulp-rename');

gulp.task('sass', function () {
    gulp.src('./sass/myriad.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('minify', function () {
    gulp.src('./sass/myriad.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
});


gulp.task('default', ['sass', 'minify']);
