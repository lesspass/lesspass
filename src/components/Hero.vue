<style scoped>
    .jumbotron {
        background-color: transparent;
        padding-left: 0;
        padding-right: 0;
    }

    #hero-text {
        color: #ffffff;
        padding-top: 6em;
    }

    @media (max-width: 544px) {
        #hero__password-generator-block {
            padding: 0;
        }

        .jumbotron {
            padding: 0;
        }
    }
</style>
<template>
    <div class="container">
        <div class="jumbotron">
            <div class="row">
                <div id="hero__password-generator-block" class="col-lg-6 push-lg-6">
                    <lesspass></lesspass>
                </div>
                <div id="hero-text" class="col-lg-6 pull-lg-6">
                    <h1 class="display-5">Next-Gen Open Source Password Manager</h1>
                    <p class="lead">
                        Stop wasting time synchronize your encrypted vault.
                        Remember one master password to access your passwords, anywhere, anytime.
                        No sync needed.
                    </p>
                    <p class="lead">
                        <button class="btn btn-secondary">How it works ?</button>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import LessPass from './LessPass';

    export default {
        components: {
            'lesspass': LessPass
        }
    }
</script>
