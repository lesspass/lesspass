<style>
    html, body {
        height: 100%;
        width: 100%;
    }

    body {
        background: #008ed6 fixed top;
        background-size: cover;
        margin: 0;
    }

    * {
        border-radius: 0 !important;
    }

    #app {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    .inner-addon {
        position: relative;
    }

    i {
        color: #555;
    }

    .white, .white-link {
        color: #FFFFFF;
    }

    .white-link:hover, .white-link:active, .white-link:focus {
        color: #FFFFFF;
    }

    #lesspass {
        border: none;
    }

    @media (min-width: 768px) {
        #lesspass {
            width: 500px;
            height: 455px;

            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;

            max-width: 100%;
            max-height: 100%;
            overflow: auto;
        }
    }

    /* style icon */
    .inner-addon i {
        position: absolute;
        padding: 10px;
        pointer-events: none;
        z-index: 10;
    }

    /* align icon */
    .left-addon i {
        left: 0;
    }

    .right-addon i {
        right: 0;
    }

    /* add padding  */
    .left-addon input {
        padding-left: 30px;
    }

    .right-addon input {
        padding-right: 30px;
    }

    .link {
        cursor: pointer;
    }

    .card-block {
        position: relative;
    }

    #hero {
        height: 100vh;
    }

    .feature-image {
        width: 64px;
    }
</style>
<template>
    <div id="app">
        <div id="hero">
            <div id="lesspass" class="card">
                <lesspass-menu></lesspass-menu>
                <div class="card-block">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <div id="content" class="white">
            <div class="m-y-1 hidden-sm-down" id="navbar">
                <div class="container">
                    <div class="row">
                        <lesspass-header></lesspass-header>
                    </div>
                </div>
            </div>
            <div class="container m-t-3 p-t-3">
                <div class="row">
                    <div class="col-md-6 col-lg-3 m-b-3">
                        <div class="media">
                            <div class="media-left">
                                <img class="media-object feature-image" src="./images/responsive.png"
                                     alt="Generic placeholder image">
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading">Available everywhere</h4>
                                <p>
                                    LessPass is a web application and works on all devices (computer, smartphone, tablet
                                    and
                                    your smartTV)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 m-b-3">
                        <div class="media">
                            <div class="media-left">
                                <img class="media-object feature-image" src="./images/no-cloud.png"
                                     alt="Generic placeholder image">
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading">No storage</h4>
                                <p>
                                    LessPass regenerates your passwords when you need them. No cloud storage is required
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 m-b-3">
                        <div class="media">
                            <a class="media-left" href="https://github.com/lesspass/lesspass/">
                                <img class="media-object feature-image" src="./images/open-source.png"
                                     alt="Generic placeholder image">
                            </a>
                            <div class="media-body">
                                <h4 class="media-heading">Open Source</h4>
                                <p>
                                    LessPass is <strong>open-source</strong>. So its security can be audited. Source
                                    code is available on <a class="white-link"
                                                            href="https://github.com/lesspass/lesspass/">Github</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 m-b-3">
                        <div class="media">
                            <div class="media-left">
                                <img class="media-object feature-image" src="./images/free.png"
                                     alt="Generic placeholder image">
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading">Free</h4>
                                <p>
                                    LessPass is free<br>and always will be
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container p-y-3">
                <div class="row">
                    <div class="col-md-6">
                        <h1 class="hero__title p-y-2">
                            Next-Gen Open Source Password Manager
                        </h1>
                        <h4 class="hero__subtitle">
                            Stop wasting time synchronize your encrypted vault.
                            Remember one master password to access your passwords, anywhere, anytime.<br>No sync needed.
                        </h4>
                    </div>
                    <div class="col-md-6">
                        <img src="./images/demo.gif" class="img-fluid" alt="demo">
                    </div>
                </div>
            </div>
            <div class="container m-y-3 text-xs-center text-sm-left">
                <div class="row">
                    <div class="col-xs-12">
                        <small>
                            Copyright LessPass <br>
                            Created by <a class="white-link" href="https://twitter.com/guillaume20100">Guillaume
                            Vincent</a>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import LesspassHeader from './components/LesspassHeader';
    import LesspassMenu from './components/Menu';

    export default {
        components: {
            LesspassHeader,
            LesspassMenu
        },
        created(){
            const fiveMinutes = 1000 * 60 * 5;
            this.$store.dispatch('REFRESH_TOKEN');
            setInterval(()=> {
                this.$store.dispatch('REFRESH_TOKEN');
            }, fiveMinutes);
        }
    }
</script>
