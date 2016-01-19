<style>
    .jumbotron {
        color: black;
    }
</style>
<template>
    <div class="container">
        <div class="jumbotron">
            <div class="row">
                <div class="col-lg-8">
                    <div v-if="$t('lang') == 'en'">
                        <img src="../assets/images/story-en.png" class="img-fluid" alt="what is lesspass"/>
                    </div>
                    <div v-if="$t('lang') == 'fr'">
                        <img src="../assets/images/story-fr.png" class="img-fluid" alt="qu'est ce que lesspass"/>
                    </div>
                    <small>&copy; Nanou</small>
                </div>
                <div class="col-lg-4 m-t-1">
                    <p class="lead">
                        <a href='https://lesspass.com/'>LessPass</a> {{ $t('what_is_lesspass') }}
                    </p>
                    <p class="lead">
                        <a href='https://lesspass.com/'>LessPass</a> {{ $t('what_is_lesspass2') }}
                    </p>

                    <p class="text-xs-center">
                        <a href="#passwordGeneratorHr" class="hidden-xs-down btn btn-primary-outline btn-sm">{{ $t('use_btn') }}</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>