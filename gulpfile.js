'use strict';

const gulp = require('gulp');

gulp.task('lesspass', [], function() {
  return gulp.src(['node_modules/lesspass-pure/dist/**/*'])
    .pipe(gulp.dest('www/dist/'));
});

gulp.task('build', [], function() {
  gulp.start('lesspass');
});

gulp.task('default', ['build'], function() {

});
