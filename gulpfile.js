var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('js', function () {
    return gulp.src(['node_modules/unibabel/index.js', 'node_modules/unibabel/unibabel.hex.js', 'webcrypto.js'])
        .pipe(concat('lesspass.webcrypto.js'))
        .pipe(gulp.dest('lib'))
        .pipe(rename('lesspass.webcrypto.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('lib'));
});

gulp.task('default', ['js'], function () {
});

