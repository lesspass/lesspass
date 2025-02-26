export function cleanUrl(url: string | null | undefined) {
  if (!url) {
    return "";
  }
  var matchesDomainName = url.match(/^(?:https?:\/\/)([^/?#]+)(?:[/?#]|$)/i);
  return matchesDomainName && matchesDomainName[1] ? matchesDomainName[1] : "";
}

export function getSite(): Promise<string> {
  return new Promise((resolve) => {
    try {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const site = tabs[0].url || "";
        resolve(cleanUrl(site));
      });
    } catch (error) {
      resolve("");
    }
  });
}
