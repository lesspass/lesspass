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
                        <img src="story-en.png" class="img-fluid" alt="what is lesspass"/>
                    </div>
                    <div v-if="$t('lang') == 'fr'">
                        <img src="story-fr.png" class="img-fluid" alt="qu'est ce que lesspass"/>

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
                </div>
            </div>
        </div>
    </div>
</template>