export function showTooltip(element, message, position = "right") {
  element.setAttribute("aria-label", message);
  element.setAttribute("data-balloon-visible", "");
  element.setAttribute("data-balloon-pos", position);
}

export function hideTooltip(element) {
  element.removeAttribute("aria-label");
  element.removeAttribute("data-balloon-visible");
  element.removeAttribute("data-balloon-pos");
}
