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
