<style>
    #how-it-works {
        background-color: #F8F8F8;
        color: #7f7f7f;
    }
</style>
<template>
    <div id="how-it-works">
        <div class="container">
            <div class="row p-t-3">
                <div class="col-lg-12">
                    <h3>{{ $t('how_it_works.title') }}</h3>
                    <p class="lead">
                        {{ $t('how_it_works.subtitle') }}
                    </p>
                </div>
            </div>
            <div class="row p-t-1 p-b-3">
                <div class="col-lg-4 m-b-2">
                    <img src="./lesspass.gif" alt="open source" class="img-fluid">
                </div>
                <div class="col-lg-7">
                    <div class="media m-b-3">
                        <div class="media-body">
                            <h4 class="media-heading">{{ $t('how_it_works.no_sync') }}</h4>
                            <p class="lead">
                                {{ $t('how_it_works.no_sync_detail') }}
                            </p>
                        </div>
                    </div>
                    <div class="media m-b-3">
                        <div class="media-body">
                            <h4 class="media-heading">{{ $t('how_it_works.derivation') }}</h4>
                            <p class="lead">
                                {{ $t('how_it_works.derivation_detail') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>