export type Fingerprint = [Finger, Finger, Finger];

export const FingerprintIcons = [
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
  "fa-coffee", // duplicated but kept for retro compatibility
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
  "fa-graduation-cap",
] as const;

export type FingerprintIcon = (typeof FingerprintIcons)[number];

export const FingerprintColors = [
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
  "#24FE23",
] as const;

export type FingerprintColor = (typeof FingerprintColors)[number];

export type Finger = {
  icon: FingerprintIcon;
  color: FingerprintColor;
};

export function getColor(color: string): FingerprintColor {
  const index = parseInt(color, 16) % FingerprintColors.length;
  return FingerprintColors[index];
}

export function getIcon(hash: string): FingerprintIcon {
  const index = parseInt(hash, 16) % FingerprintIcons.length;
  return FingerprintIcons[index];
}

export function createFingerprint(hmacSHA256: string): Fingerprint {
  const fingerprint: Finger[] = [];
  const hash1 = hmacSHA256.substring(0, 6);
  fingerprint.push({
    color: getColor(hash1),
    icon: getIcon(hash1),
  });

  const hash2 = hmacSHA256.substring(6, 12);
  fingerprint.push({
    color: getColor(hash2),
    icon: getIcon(hash2),
  });

  const hash3 = hmacSHA256.substring(12, 18);
  fingerprint.push({
    color: getColor(hash3),
    icon: getIcon(hash3),
  });
  return fingerprint as Fingerprint;
}
