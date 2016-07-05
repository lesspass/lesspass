<style>
    #navbar__logo {
        height: 2em;
    }
</style>
<template>
    <div id="header">
        <div class="col-xs-6">
            <a class="nav-link" v-link="{ path: '/' }">
                <img src="../images/logo-white.png" alt="logo" id="navbar__logo">
            </a>
        </div>
        <div class="col-xs-6 text-xs-right">
            <nav class="nav nav-inline pull-sm-right" style="line-height: 2em">
                <a class="nav-link white-link"
                   href="https://addons.mozilla.org/en-US/firefox/addon/lesspass/">
                    <i class="fa fa-firefox" aria-hidden="true"></i>
                </a>
                <a class="nav-link white-link"
                   href="https://chrome.google.com/webstore/detail/lesspass/lcmbpoclaodbgkbjafnkbbinogcbnjih">
                    <i class="fa fa-chrome" aria-hidden="true"></i>
                </a>
                <a class="nav-link white-link hidden-sm-down" v-link="{ path: '/download/' }">
                    {{ $t('index.Download') }}
                </a>
                <a class="nav-link white-link" v-link="{ path: '/entries/' }">
                    {{ $t('index.Login') }}
                </a>
            </nav>
        </div>
    </div>
</template>
