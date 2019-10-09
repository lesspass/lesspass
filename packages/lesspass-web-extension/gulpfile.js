const { src, dest, parallel } = require("gulp");
const webpack = require('webpack-stream');

gulp.task('options', function() {
  return gulp.src('extension/src/main.js')
    .pipe(webpack('./webpack.config.js'))
    .pipe(gulp.dest('dist/'));
});

function js() {
  return src([
    "node_modules/lesspass-pure/dist/**/*",
    "extension/popup.js"
  ]).pipe(dest("extension/dist/"));
}

exports.js = js;
exports.default = parallel(js);
