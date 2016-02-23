<style>
    .lesspass-how-it-works {
        background-color: #025aa5;;
        color: #D3D8E8;
    }

    .lesspass-how-it-works img {
        height: 120px;
    }

    .lesspass-how-it-works .explanation {
        line-height: 1.5em;
        font-weight: 400;
    }

    .lesspass-how-it-works .title {
        font-weight: 600;
    }

    .lesspass-how-it-works a {
        color: #D3D8E8;
        text-decoration: underline;
    }
</style>
<template>
    <div class="lesspass-how-it-works p-t-3">
        <div class="container">
            <div class="row text-xs-center">
                <div class="col-md-3">
                    <div class="row">
                        <div class="col-lg-12 m-y-3">
                            <img src="../assets/images/responsive.png" alt="responsive">
                        </div>
                        <div class="col-lg-12 m-b-3">
                            <h4 class="title">{{{ $t('how_it_works.responsive_title') }}}</h4>
                            <h5 class="explanation m-t-1 m-b-3">{{{ $t('how_it_works.responsive') }}}</h5>
                        </div>
                    </div>

                </div>
                <div class="col-md-3">
                    <div class="row">
                        <div class="col-lg-12 m-y-3">
                            <img src="../assets/images/no-cloud.png" alt="no cloud">
                        </div>
                        <div class="col-lg-12 m-b-3">
                            <h4 class="title">{{{ $t('how_it_works.no_cloud_title') }}}</h4>
                            <h5 class="explanation m-t-1 m-b-3">{{{ $t('how_it_works.no_cloud') }}}</h5>
                        </div>
                    </div>

                </div>

                <div class="col-md-3">
                    <div class="row">
                        <div class="col-lg-12 m-y-3">
                            <img src="../assets/images/open-source.png" alt="open source">
                        </div>
                        <div class="col-lg-12 m-b-3">
                            <h4 class="title">{{{ $t('how_it_works.open_source_title') }}}</h4>
                            <h5 class="explanation m-t-1 m-b-3">{{{ $t('how_it_works.open_source') }}}</h5>
                        </div>
                    </div>


                </div>
                <div class="col-md-3">
                    <div class="row">
                        <div class="col-lg-12 m-y-3">
                            <img src="../assets/images/free.png" alt="free">
                        </div>
                        <div class="col-lg-12 m-b-3">
                            <h4 class="title">{{{ $t('how_it_works.free_title') }}}</h4>
                            <h5 class="explanation m-t-1 m-b-3">{{{ $t('how_it_works.free') }}}</h5>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>