import PasswordGenerator from './password-generator';

document.getElementById("help-btn").onclick = function () {
    $('body').chardinJs('start');
};

document.getElementById('foo').focus();
var clipboard = new Clipboard('#copy-btn',{
    text: function(trigger) {
        var elements = document.getElementById('foo').value.split(':');
        return PasswordGenerator.make_password(elements[0], elements[1]);
    }
});
