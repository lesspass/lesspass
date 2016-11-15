var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('webcrypto', function () {
    return gulp.src(['node_modules/unibabel/index.js', 'node_modules/unibabel/unibabel.hex.js', 'webcrypto.js'])
        .pipe(concat('lesspass.webcrypto.js'))
        .pipe(gulp.dest('lib'));
});

gulp.task('default', ['webcrypto'], function () {
});

