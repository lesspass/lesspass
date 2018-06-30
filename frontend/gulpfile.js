'use strict';

var gulp = require('gulp');
var favicons = require("gulp-favicons");

gulp.task('lesspass', [], function() {
  return gulp.src(['node_modules/lesspass-pure/dist/**/*'])
    .pipe(gulp.dest('dist/'));
});

gulp.task('images', [], function() {
  return gulp.src(['images/**/*'])
    .pipe(gulp.dest('dist/'));
});

gulp.task('favicon', function() {
  return gulp.src('images/favicon.png')
    .pipe(favicons({
      appName: 'LessPass',
      appDescription: 'Next-Gen Open Source Password Manager',
      developerName: 'Guillaume Vincent',
      background: '#555555',
      path: 'dist/',
      url: 'https://lesspass.com/',
      display: 'standalone',
      orientation: 'portrait',
      start_url: '/?homescreen=1',
      version: 1.0,
      logging: false,
      online: false,
      html: 'index.html',
      pipeHTML: true,
      replace: true
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', [], function() {
  gulp.start('lesspass', 'images', 'favicon');
});

gulp.task('default', ['build'], function() {

});
