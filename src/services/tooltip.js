export function showTooltip(elem, msg) {
  var classNames = elem.className;
  elem.setAttribute('class', classNames + ' hint--top');
  elem.setAttribute('aria-label', msg);
  setTimeout(function() {
    elem.setAttribute('class', classNames);
    elem.setAttribute('aria-label', '');
  }, 2000);
}
