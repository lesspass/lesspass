document.addEventListener("DOMContentLoaded", function() {
  let head = document.getElementsByTagName('head')[0];
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'dist/lesspass.min.js';
  head.appendChild(script);
});
