<style>
    @import '../node_modules/bootstrap/dist/css/bootstrap.css';

    body {
        font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: 1.5;
        color: #CFD2DA;
        background-color: #252830;
        overflow-y: scroll;
    }

    .blue {
        color: #0275D8;
    }

    #header{
        padding: 0;
    }

    #header #logo {
        width: 30px;
        height: 30px;
    }

</style>

<template>
    <div id="header" class="container m-t-1">
        <nav class="navbar navbar-dark ">
            <a class="navbar-brand" href="#/">
                <img id="logo" alt="lesspass" class="img-fluid" src="./assets/images/logo.png">
            </a>
            <a class="navbar-brand" href="#/"> LessPass
            </a>
            <ul class="nav navbar-nav pull-xs-right">
                <li class="nav-item">
                    <a class="btn btn-primary" href="#/entries">{{ $t('header.login') }}</a>
                </li>
            </ul>
        </nav>
    </div>
    <router-view></router-view>
</template>
