<style>
    #features {
        background-color: #384d55;
        color: white;
        padding-top: 3em;
        padding-bottom: 3em;
    }

    #features .features__img_block{
        max-width: 140px;
    }
</style>
<template>
    <div id="features">
        <div class="container">
            <div class="row features__row">
                <div class="col-md-6">
                    <div class="media m-y-3">
                        <a class="media-left media-middle text-xs-center features__img_block" href="#">
                            <img src="./responsive.png" alt="" class="img-fluid">
                        </a>
                        <div class="media-body">
                            <h4 class="media-heading">{{{ $t('how_it_works.responsive_title') }}}</h4>
                            {{{ $t('how_it_works.responsive') }}}
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="media m-y-3">
                        <a class="media-left media-middle text-xs-center features__img_block" href="#">
                            <img src="./no-cloud.png" alt="" class="img-fluid">
                        </a>
                        <div class="media-body">
                            <h4 class="media-heading">{{{ $t('how_it_works.no_cloud_title') }}}</h4>
                            {{{ $t('how_it_works.no_cloud') }}}
                        </div>
                    </div>
                </div>
            </div>
            <div class="row features__row">
                <div class="col-md-6">
                    <div class="media m-y-3">
                        <a class="media-left media-middle text-xs-center features__img_block" href="#">
                            <img src="./open-source.png" alt="" class="img-fluid">
                        </a>
                        <div class="media-body">
                            <h4 class="media-heading">{{{ $t('how_it_works.open_source_title') }}}</h4>
                            {{{ $t('how_it_works.open_source') }}}
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="media m-y-3">
                        <a class="media-left media-middle text-xs-center features__img_block" href="#">
                            <img src="./free.png" alt="" class="img-fluid">
                        </a>
                        <div class="media-body">
                            <h4 class="media-heading">{{{ $t('how_it_works.free_title') }}}</h4>
                            {{{ $t('how_it_works.free') }}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>