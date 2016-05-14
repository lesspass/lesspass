'use strict';
import tld from 'tldjs';

function _ipIsValid(ipAddress) {
  return Boolean(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress));
}

function getDomainName(urlStr) {
  const domain = tld.getDomain(urlStr);
  const subDomain = tld.getSubdomain(urlStr);
  const ip = `${subDomain}.${domain}`;
  if (_ipIsValid(ip)) {
    return ip;
  }
  return domain;
}

export {getDomainName, _ipIsValid};
