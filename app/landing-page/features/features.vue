<style>
    #features {
        background-color: #025aa5;
        color: #f2f2f2;
    }

    #features a {
        color: inherit;
        text-decoration: underline;
    }

    #features .container {
        position: relative;

        padding-top: 20vh;
        padding-bottom: 20vh;
    }

    #features .features__card {

        background-color: transparent;
        border: none;
        /*color: #1B2529;*/
        border-radius: 0 !important;
    }

    #features .features__card img {
        height: 120px;
    }

    @media (min-width: 768px) {

        #features .features__card {
            width: 25%
        }
    }
</style>
<template>
    <div id="features">
        <div class="container">
            <div class="row text-xs-center">
                <div class="card-deck-wrapper">
                    <div class="card-deck">
                        <div class="card features__card p-t-2">
                            <img class="card-img-top" src="./responsive.png" alt="Card image cap">
                            <div class="card-block">
                                <h4 class="card-title">{{{ $t('features.responsive_title') }}}</h4>
                                <p class="card-text">{{{ $t('features.responsive') }}}</p>
                            </div>
                        </div>
                        <div class="card features__card p-t-2">
                            <img class="card-img-top" src="./no-cloud.png" alt="Card image cap">
                            <div class="card-block">
                                <h4 class="card-title">{{{ $t('features.no_cloud_title') }}}</h4>
                                <p class="card-text">{{{ $t('features.no_cloud') }}}</p>
                            </div>
                        </div>
                        <div class="card features__card p-t-2">
                            <img class="card-img-top" src="./open-source.png" alt="Card image cap">
                            <div class="card-block">
                                <h4 class="card-title">{{{ $t('features.open_source_title') }}}</h4>
                                <p class="card-text">{{{ $t('features.open_source') }}}</p>
                            </div>
                        </div>
                        <div class="card features__card p-t-2">
                            <img class="card-img-top" src="./free.png" alt="Card image cap">
                            <div class="card-block">
                                <h4 class="card-title">{{{ $t('features.free_title') }}}</h4>
                                <p class="card-text">{{{ $t('features.free') }}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>