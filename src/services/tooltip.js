export function showTooltip(elem, msg) {
    var classNames = elem.className;
    elem.setAttribute('class', classNames + ' hint--right');
    elem.setAttribute('aria-label', msg);
    setTimeout(function () {
        elem.setAttribute('class', classNames);
    }, 2000);
}