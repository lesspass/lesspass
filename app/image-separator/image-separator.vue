<style>
    #image-separator #image-separator__top {
        background-color: #134a6a;
            min-height: 20vh;
    }

    #image-separator #image-separator__bottom {
        background-color: #1B2529;
        min-height: 40vh;
    }

    #image-separator img{
        margin-bottom: -35vh;
    }

</style>
<template>
    <div id="image-separator">
        <div id="image-separator__top" class="text-xs-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-lg-offset-2" v-if="$t('lang') == 'en'">
                        <img src="./story-en.png" class="img-fluid" alt="what is lesspass"/>
                    </div>
                    <div class="col-lg-8 col-lg-offset-2" v-if="$t('lang') == 'fr'">
                        <img src="./story-fr.png" class="img-fluid" alt="qu'est ce que lesspass"/>
                    </div>
                </div>
            </div>
        </div>
        <div id="image-separator__bottom">
        </div>
    </div>
</template>