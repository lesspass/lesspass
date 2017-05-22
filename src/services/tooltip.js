export function showTooltip(elem, msg, classes='hint--top') {
  var classNames = elem.className;
  elem.setAttribute('class', `${classNames} ${classes}`);
  elem.setAttribute('aria-label', msg);
  setTimeout(function() {
    elem.setAttribute('class', classNames);
    elem.setAttribute('aria-label', '');
  }, 2000);
}
