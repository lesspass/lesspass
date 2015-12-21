import {lesspass} from '../app/lesspass';
import angular from 'angular';

import Clipboard from 'clipboard';

window.jQuery = $ = require('jquery');
var bootstrap = require('bootstrap/dist/js/bootstrap');

class lesspassController {
    constructor($scope) {
        var vm = this;

        this.password = '';
        this.site = {
            site_name: '',
            password_length: 12,
            password_types: ['lowercase', 'uppercase', 'numbers', 'symbols'],
            counter: 1
        };

        $scope.$watch(function () {
            return vm.password;
        }, function () {
            vm.updatePassword();
        });

        $scope.$watchCollection(function () {
            return vm.site;
        }, function () {
            vm.updatePassword();
        });

        var clipboard = new Clipboard('#copy-btn');
        clipboard.on('success', function (e) {
            var copyBtn = document.getElementById("copy-btn");
            var t = $(copyBtn).tooltip({title: 'Copié'});
            t.tooltip('show');
            e.clearSelection();
        });

        clipboard.on('error', function (e) {
            var passwordGenerated = document.getElementById("password_generated");
            var t = $(passwordGenerated).tooltip({title: 'Cmd + C pour copier le mot de passe'});
            t.tooltip('show');
        });
    }

    updatePasswordTypes(type) {
        var passwordTypes = this.site.password_types;
        var indexOfId = passwordTypes.indexOf(type);
        if (indexOfId == -1) {
            passwordTypes.push(type)
        } else {
            passwordTypes.splice(indexOfId, 1)
        }
        this.updatePassword();
    }

    updatePassword() {
        if (this.password && this.site.site_name) {
            this.generatedPassword = lesspass.create_password(this.password, this.site);
        }
    }

    displayHelp() {
        if (this.helpDisplayed) {
            $('body').chardinJs('stop');
            this.helpDisplayed = false;
        } else {
            $('body').chardinJs('start');
            this.helpDisplayed = true;
        }
    }
}


angular
    .module('app', [])
    .controller('lesspassController', lesspassController);
