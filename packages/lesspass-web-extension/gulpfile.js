const { src, dest, parallel } = require("gulp");

function js() {
  return src([
    "node_modules/lesspass-pure/dist/**/*",
    "extension/popup.js"
  ]).pipe(dest("extension/dist/"));
}

exports.js = js;
exports.default = parallel(js);
