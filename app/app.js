import PasswordGenerator from './password-generator';

document.getElementById("help-btn").onclick = function () {
    $('body').chardinJs('start');
};

document.getElementById('foo').focus();
var clipboard = new Clipboard('#copy-btn',{
    text: function(trigger) {
        $('body').chardinJs('stop');
        var elements = document.getElementById('foo').value.split(':');
        return PasswordGenerator.make_password(elements[0], elements[1]);
    }
});
