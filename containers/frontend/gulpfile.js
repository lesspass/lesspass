const { src, dest, parallel } = require("gulp");
const favicons = require("gulp-favicons");

function js() {
  return src(["node_modules/lesspass-pure/dist/**/*"]).pipe(dest("dist/"));
}

function images() {
  return src(["images/**/*"]).pipe(dest("dist/"));
}

function favicon() {
  return src("images/favicon.png")
    .pipe(
      favicons({
        appName: "LessPass",
        appDescription: "Next-Gen Open Source Password Manager",
        developerName: "Guillaume Vincent",
        background: "#555555",
        path: "dist/",
        url: "https://lesspass.com/",
        display: "standalone",
        orientation: "portrait",
        start_url: "/?homescreen=1",
        version: 1.0,
        logging: false,
        online: false,
        html: "index.html",
        pipeHTML: true,
        replace: true
      })
    )
    .pipe(dest("dist/"));
}

exports.js = js;
exports.images = images;
exports.favicon = favicon;
exports.default = parallel(js, images, favicon);
