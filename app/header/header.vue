<style>
    #header {
        background-color: #006699;
        color: #ffffff;
    }

    #header a {
        color: inherit;
    }

    #header #header__title {
        text-transform: uppercase;
        font-size: 2.1rem;
        padding-top: .70rem;
    }

    @media (min-width: 480px) {
        #header .header__headlines {
            padding-top: 12vh;
            padding-bottom: 17vh;
        }

        #header #header__title {
            font-size: 2.5rem;
        }
    }
</style>
<template>
    <div id="header">
        <div class="container">
            <div class="row header__headlines">
                <div class="col-md-6">
                    <h1 id="header__title">{{{ $t('headlines.title') }}}</h1>
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
    import PasswordGenerator from './password-generator/password-generator.vue';

    export default {
        data: function () {
            return {}
        },
        components: {
            PasswordGenerator
        }
    }
</script>