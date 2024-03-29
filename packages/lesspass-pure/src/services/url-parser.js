"use strict";

import atob from "@oslab/atob";
import mostUsedTlds from "./mostUsedTlds.json";

export function cleanUrl(url) {
  if (!url) {
    return "";
  }
  var matchesDomainName = url.match(/^(?:https?:\/\/)([^/?#]+)(?:[/?#]|$)/i);
  return matchesDomainName && matchesDomainName[1] ? matchesDomainName[1] : "";
}

export function removeSiteSubdomain(url) {
  let hostname = "";
  try {
    hostname = new URL(url).hostname;
  } catch (error) {
    return "";
  }
  for (let i = 0; i < mostUsedTlds.length; i++) {
    const tld = mostUsedTlds[i];
    const tldWithDot = `.${tld}`;
    if (hostname.endsWith(tldWithDot)) {
      const domain = hostname.replace(tldWithDot, "").split(".").pop();
      if (domain) {
        return domain + tldWithDot;
      }
    }
  }
  return hostname;
}

function isAnIpAddressWithPort(address) {
  return /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}):(\d{1,5})$/.test(address);
}

export function getSuggestions(url) {
  const cleanedUrl = cleanUrl(url) || url;
  if (isAnIpAddressWithPort(cleanedUrl)) return [];
  const urlElements = cleanedUrl
    .toLowerCase()
    .split(".")
    .filter((element) => element.length >= 2);
  if (urlElements.length < 2) return [];
  const baseName = urlElements[urlElements.length - 2];
  const tld = urlElements[urlElements.length - 1];
  return urlElements.reduceRight(
    (accumulator, currentValue) => {
      const index = urlElements.indexOf(currentValue);
      if (index >= 0 && index < urlElements.length - 2) {
        const lastValue = accumulator[accumulator.length - 1];
        accumulator.push(currentValue + "." + lastValue);
      }
      return accumulator;
    },
    [baseName, `${baseName}.${tld}`]
  );
}

export function getSite() {
  return new Promise((resolve) => {
    if (
      typeof chrome !== "undefined" &&
      typeof chrome.tabs !== "undefined" &&
      typeof chrome.tabs.query !== "undefined"
    ) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        resolve(tabs[0].url);
      });
    } else {
      resolve("");
    }
  });
}

function passwordProfileFromRawQuery(query) {
  const password = {};
  if ("numbers" in query) {
    password["digits"] =
      query["numbers"].toLowerCase() === "true" ||
      query["numbers"].toLowerCase() === "1";
  }
  ["uppercase", "lowercase", "digits", "symbols"].forEach((booleanishQuery) => {
    if (booleanishQuery in query) {
      password[booleanishQuery] =
        query[booleanishQuery].toLowerCase() === "true" ||
        query[booleanishQuery].toLowerCase() === "1";
    }
  });
  ["site", "login"].forEach((stringQuery) => {
    if (stringQuery in query) {
      password[stringQuery] = query[stringQuery];
    }
  });
  ["length", "counter", "version"].forEach((intQuery) => {
    if (intQuery in query) {
      password[intQuery] = parseInt(query[intQuery], 10);
    }
  });
  return password;
}

function decodeBase64PasswordProfile(b64) {
  return JSON.parse(atob(b64));
}

export function getPasswordFromUrlQuery(queryParameters) {
  if ("passwordProfileEncoded" in queryParameters) {
    return decodeBase64PasswordProfile(
      queryParameters["passwordProfileEncoded"]
    );
  }
  return passwordProfileFromRawQuery(queryParameters);
}
