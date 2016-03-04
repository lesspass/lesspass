<style>
    #header {
        background-color: rgba(52, 126, 185, 1);
        color: white;
    }

    #header a {
        color: inherit;
    }

    .header__logo {
        height: 32px;
    }

    .header__title {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 2rem;
        margin-top: .65rem;
    }
    .header__subtitle{
        font-size: 1.1rem;
    }

    .header__navbar .navbar {
        padding: 1em 0;
    }

    @media (min-width: 480px) {
        .header__headlines {
            margin-top: 10vh;
            margin-bottom: 20vh;
        }

        .header__title {
            font-size: 2.5rem;
        }
    }
</style>
<template>
    <div id="header">
        <div class="header__navbar">
            <div class="container">
                <nav class="navbar">
                    <ul class="nav navbar-nav">
                        <li class="nav-item">
                            <a class="" href="#">
                                <img class="header__logo" src="./logo-white.png" alt="logo">
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="header__hero">
            <div class="container">
                <div class="row header__headlines">
                    <div class="col-md-6">
                        <h1 class="header__title">{{{ $t('headlines.title') }}}</h1>
                        <p class="header__subtitle hidden-xs-down">
                            <b>LessPass</b> {{ $t('headlines.subtitle') }}
                        </p>
                    </div>

                    <div class="col-md-6">
                        <password-generator></password-generator>
                    </div>
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