(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.getLessPassFingerprint = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
function getColor(color) {
  var colors = [
    "#000000",
    "#074750",
    "#009191",
    "#FF6CB6",
    "#FFB5DA",
    "#490092",
    "#006CDB",
    "#B66DFF",
    "#6DB5FE",
    "#B5DAFE",
    "#920000",
    "#924900",
    "#DB6D00",
    "#24FE23"
  ];
  var index = parseInt(color, 16) % colors.length;
  return colors[index];
}

function getIcon(hash) {
  var icons = [
    "fa-hashtag",
    "fa-heart",
    "fa-hotel",
    "fa-university",
    "fa-plug",
    "fa-ambulance",
    "fa-bus",
    "fa-car",
    "fa-plane",
    "fa-rocket",
    "fa-ship",
    "fa-subway",
    "fa-truck",
    "fa-jpy",
    "fa-eur",
    "fa-btc",
    "fa-usd",
    "fa-gbp",
    "fa-archive",
    "fa-area-chart",
    "fa-bed",
    "fa-beer",
    "fa-bell",
    "fa-binoculars",
    "fa-birthday-cake",
    "fa-bomb",
    "fa-briefcase",
    "fa-bug",
    "fa-camera",
    "fa-cart-plus",
    "fa-certificate",
    "fa-coffee",
    "fa-cloud",
    "fa-coffee",
    "fa-comment",
    "fa-cube",
    "fa-cutlery",
    "fa-database",
    "fa-diamond",
    "fa-exclamation-circle",
    "fa-eye",
    "fa-flag",
    "fa-flask",
    "fa-futbol-o",
    "fa-gamepad",
    "fa-graduation-cap"
  ];
  var index = parseInt(hash, 16) % icons.length;
  return icons[index];
}

function getFingerprint(hmacSHA256) {
  var fingerprint = [];
  var hash1 = hmacSHA256.substring(0, 6);
  fingerprint.push({
    color: getColor(hash1),
    icon: getIcon(hash1)
  });

  var hash2 = hmacSHA256.substring(6, 12);
  fingerprint.push({
    color: getColor(hash2),
    icon: getIcon(hash2)
  });

  var hash3 = hmacSHA256.substring(12, 18);
  fingerprint.push({
    color: getColor(hash3),
    icon: getIcon(hash3)
  });

  return fingerprint;
}

module.exports = {
  getLessPassFingerprint: getFingerprint
};

},{}]},{},[1])(1)
});
