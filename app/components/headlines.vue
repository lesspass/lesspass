<style>

    .headlines .title {
        font-size: 1.4rem;
    }

    .headlines .subtitle {
        font-size: 1.2rem;
    }

    @media (min-width: 550px) {
        .headlines {
            padding: 1em 0 3em;
        }

        .headlines .title {
            margin-top: 1em;
            font-size: 2.3rem;
        }
    }
</style>
<template>
    <section class="headlines">
        <div class="container">
            <div class="col-lg-6 hidden-xs-down">
                <div v-if="$t('lang') == 'en'">
                    <img src="../assets/images/story-en.png" class="img-fluid" alt="what is lesspass"/>
                </div>
                <div v-if="$t('lang') == 'fr'">
                    <img src="../assets/images/story-fr.png" class="img-fluid" alt="qu'est ce que lesspass"/>
                </div>
                <small>&copy; Nanou</small>
            </div>
            <div class="col-lg-6 m-t-3">
                <h2 class="title text-primary">{{{ $t('header.title') }}}</h2>
                <h4 class="subtitle">
                    <span class="text-primary"> LessPass</span> {{ $t('header.subtitle') }}
                </h4>
            </div>
        </div>
    </section>
</template>