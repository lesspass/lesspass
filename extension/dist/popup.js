setTimeout(function () {
    var site = document.getElementById('site');
    if (site.value.length > 0) {
        document.getElementById('login').focus();
    } else {
        site.focus();
    }
}, 500);