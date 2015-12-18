import {lesspass} from '../app/lesspass';
import angular from 'angular';

class lesspassController {
    constructor() {
        this.lowercase = true;
        this.uppercase = true;
        this.number = true;
        this.symbols = true;
    }
    displayHelp(){
        $('body').chardinJs('start');
    }
    createPassword() {
        var passwordTypes = [];
        if (this.lowercase) {
            passwordTypes.push('lowercase')
        }
        if (this.uppercase) {
            passwordTypes.push('uppercase')
        }
        if (this.number) {
            passwordTypes.push('number')
        }
        if (this.symbols) {
            passwordTypes.push('symbols')
        }
        var site_information = {
            'site_name': this.site,
            'password_length': 12,
            'password_type': passwordTypes,
            'counter': 1
        };

        this.generatedPassword = lesspass.create_password(this.password, site_information);
    }
}


angular
    .module('app', [])
    .controller('lesspassController', lesspassController);


/*
var clipboard = new Clipboard('#copy-btn',{
    text: function(trigger) {
        $('body').chardinJs('stop');
        var elements = document.getElementById('foo').value.split(':');
        return PasswordGenerator.make_password(elements[0], elements[1]);
    }
});
*/