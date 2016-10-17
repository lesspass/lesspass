<style scoped>
    #navbar__logo {
        height: 2em;
    }
</style>
<template>
    <div class="container p-l-0 p-r-0 p-y-2 hidden-sm-down">
        <div class="col-xs-6">
            <router-link class="nav-link" :to="{ name: 'home'}">
                <img src="../images/logo-white.png" alt="logo" id="navbar__logo">
            </router-link>
        </div>
        <div class="col-xs-6 text-xs-right">
            <nav class="nav nav-inline pull-sm-right" style="line-height: 2em">
                <a class="nav-link white-link"
                   href="https://addons.mozilla.org/en-US/firefox/addon/lesspass/">
                    <i class="fa fa-firefox" aria-hidden="true"></i> Firefox Extension
                </a>
                <a class="nav-link white-link"
                   href="https://chrome.google.com/webstore/detail/lesspass/lcmbpoclaodbgkbjafnkbbinogcbnjih">
                    <i class="fa fa-chrome" aria-hidden="true"></i> Chrome Extension
                </a>
            </nav>
        </div>
    </div>
</template>