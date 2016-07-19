<style scoped>
    * {
        color: #FFFFFF;
    }

    #self_hosted {
        background-color: #424242;
        color: #F5F5F5;
        padding: 1em;
        text-align: left;
    }
</style>
<template>
    <div id="download">
        <div class="m-y-1">
            <div class="container">
                <div class="row">
                    <lesspass-header></lesspass-header>
                </div>
            </div>
            <div class="container m-t-3 p-t-3">
                <div class="row">
                    <div class="col-sm-6 col-md-4 m-b-3">
                        <div class="media">
                            <div class="media-body">
                                <h3 class="media-heading">
                                    <i class="fa fa-server"></i> Self Hosted
                                </h3>
<pre id="self_hosted"><code>npm install lesspass-pure
npm start
firefox http://localhost:8080</code>
</pre>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 m-b-3 text-md-center">
                        <div class="media">
                            <div class="media-body">
                                <h3 class="media-heading">
                                    Browser addons
                                </h3>
                                <ul class="list-unstyled">
                                    <li>
                                        <i class="fa fa-firefox" aria-hidden="true"></i>
                                        <a class="white-link"
                                           href="https://addons.mozilla.org/en-US/firefox/addon/lesspass/">
                                            Firefox
                                        </a>
                                    </li>
                                    <li>
                                        <i class="fa fa-chrome" aria-hidden="true"></i>
                                        <a class="white-link"
                                           href="https://chrome.google.com/webstore/detail/lesspass/lcmbpoclaodbgkbjafnkbbinogcbnjih">
                                            Chrome
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4 m-b-3 text-md-center">
                        <div class="media">
                            <div class="media-body">
                                <h3 class="media-heading">
                                    <i class="fa fa-desktop" aria-hidden="true"></i> Desktop App
                                    <small>(beta)</small>
                                </h3>
                                <ul class="list-unstyled">
                                    <li>
                                        <i class="fa fa-linux" aria-hidden="true"></i>
                                        <a class="white-link"
                                           href="https://s3-eu-west-1.amazonaws.com/download.lesspass.com/LessPass-v1.0.0.linux-x64.tar.gz">
                                            LessPass-linux-x64
                                        </a>
                                    </li>
                                    <li>
                                        <i class="fa fa-windows" aria-hidden="true"></i>
                                        <a class="white-link"
                                           href="https://s3-eu-west-1.amazonaws.com/download.lesspass.com/LessPass-v1.0.0.win32-x64.zip">
                                            LessPass-win32-x64
                                        </a>
                                    </li>
                                    <!--
                                    <li>
                                        <a href="#">
                                            <i class="white-link fa fa-apple" aria-hidden="true"></i> LessPass-mac-x64
                                        </a>
                                    </li>
                                    -->
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import LesspassHeader from '../components/LesspassHeader';

    export default {
        data() {
            return {};
        },
        components: {
            LesspassHeader,
        }
    };
</script>
