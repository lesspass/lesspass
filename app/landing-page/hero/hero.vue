<style>
    #hero {
        background-color: #f7f7f7;
        color: #323232;
    }

    #hero a {
        color: inherit;
    }

    #hero #hero__title {
        text-transform: uppercase;
        font-size: 2.1rem;
        padding-top: .70rem;
    }

    @media (min-width: 480px) {
        #hero .hero__headlines {
            padding-top: 12vh;
            padding-bottom: 17vh;
        }

        #hero #hero__title {
            font-size: 2.5rem;
        }
    }
</style>
<template>
    <div id="hero">
        <div class="container">
            <div class="row hero__headlines">
                <div class="col-md-6">
                    <h1 id="hero__title">{{{ $t('headlines.title') }}}</h1>
                    <p class="lead hidden-xs-down">
                        <b>LessPass</b> {{ $t('headlines.subtitle') }}
                    </p>
                </div>
                <div class="col-md-6 col-lg-5 col-lg-offset-1">
                    <password-generator></password-generator>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import PasswordGenerator from '../password-generator/password-generator.vue';

    export default {
        data: function () {
            return {}
        },
        components: {
            PasswordGenerator
        }
    }
</script>