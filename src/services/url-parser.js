"use strict";

export function cleanUrl(url) {
  if (!url) {
    return "";
  }
  var matchesDomainName = url.match(/^(?:https?\:\/\/)([^\/?#]+)(?:[\/?#]|$)/i);
  return matchesDomainName && matchesDomainName[1] ? matchesDomainName[1] : "";
}

export function getSite() {
  return new Promise(resolve => {
    if (
      typeof chrome !== "undefined" &&
      typeof chrome.tabs !== "undefined" &&
      typeof chrome.tabs.query !== "undefined"
    ) {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        resolve(cleanUrl(tabs[0].url));
      });
    } else {
      resolve("");
    }
  });
}

export function getPasswordFromUrlQuery(query) {
  const password = {};
  ["uppercase", "lowercase", "numbers", "symbols"].forEach(booleanishQuery => {
    if (booleanishQuery in query) {
      password[booleanishQuery] =
        query[booleanishQuery].toLowerCase() === "true" ||
        query[booleanishQuery].toLowerCase() === "1";
    }
  });
  ["site", "login"].forEach(stringQuery => {
    if (stringQuery in query) {
      password[stringQuery] = query[stringQuery];
    }
  });
  ["length", "counter", "version"].forEach(intQuery => {
    if (intQuery in query) {
      password[intQuery] = parseInt(query[intQuery], 10);
    }
  });
  return password;
}
