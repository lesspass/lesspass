<style>
    .card-header-dark {
        background-color: #555;
        border-color: #555;
        color: #FFF;
    }

    .menu-link {
        color: white;
    }

    .menu-link:hover, .menu-link:focus, .menu-link:active {
        text-decoration: none;
        color: white;
    }
</style>
<template>
    <div id="menu">
        <!--<div class="card-header" v-show="isAuthenticated">
            <div class="row">
                <div class="col-xs-6">
                    <router-link to="/">LessPass</router-link>
                </div>
                <div class="col-xs-6 text-xs-right">
                    <div class="btn-group">
                        <button type="button" class="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false" style="background-color:transparent; padding:0;">
                            {{email}}
                        </button>
                        <div class="dropdown-menu dropdown-menu-right">
                            <button class="dropdown-item" type="button" v-on:click="go('passwords')">Passwords</button>
                            <button class="dropdown-item" type="button">Help</button>
                            <div class="dropdown-divider"></div>
                            <button class="dropdown-item" type="button" v-on:click="logout">Log out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>-->
        <div class="card-header card-header-dark" v-show="isGuest">
            <div class="row">
                <div class="index-header">
                    <div class="col-xs-6">
                        <router-link class="menu-link" to="/">LessPass</router-link>
                    </div>
                    <div class="col-xs-6 text-xs-right">
                        <router-link class="menu-link" to="/login">
                            <i class="fa fa-user-secret white" aria-hidden="true"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import {mapGetters, mapActions} from 'vuex';

    export default {
        methods: mapActions([
            'go',
            'logout'
        ]),
        computed: mapGetters([
            'isAuthenticated',
            'isGuest',
            'email'
        ])
    }
</script>

module.exports = function (string, context) {
for (var key in context) {
var find = `\\$\\{(${key})\\}`;
var re = new RegExp(find, 'g');
string = string.replace(re, context[key]);
}
return string
};