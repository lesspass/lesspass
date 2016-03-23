<style>
    #how-it-works {
        background-color: #134a6a;
        color: #f2f2f2;
    }

    #how-it-works #how-it-works__self_hosted {
        background-color: #f7f7f7;
        padding: 1em;
    }
</style>
<template>
    <div id="how-it-works">
        <div class="container">
            <div class="row p-y-3">
                <div class="col-lg-8">
                    <h3>{{ $t('how_it_works.title') }}</h3>
                    <p>
                        {{ $t('how_it_works.detail') }}
                    </p>
                </div>
            </div>
            <div class="row p-y-3">
                <div class="col-lg-6 p-y-2">
                    <h5>{{ $t('how_it_works.always_sync') }}</h5>
                    <p>
                        {{ $t('how_it_works.always_sync_detail') }}
                    </p>
                </div>
                <div class="col-lg-6">
                    <img src="./responsive.png" alt="logo" class="img-fluid">
                </div>
            </div>
            <div class="row p-y-3">
                <div class="col-lg-3 col-lg-offset-2 text-xs-center col-md-4 col-md-offset-1">
                    <img src="./logo.png" alt="logo" class="img-fluid">
                </div>
                <div class="col-lg-6 p-y-2 col-md-6 col-md-offset-1">
                    <h5>{{ $t('how_it_works.derivation') }}</h5>
                    <p>
                        {{ $t('how_it_works.derivation_detail') }}
                    </p>
                </div>
            </div>
            <div class="row p-y-3">
                <div class="col-lg-6 col-md-10">
                    <h5>{{ $t('how_it_works.self_hosting') }}</h5>
                    <p>
                        {{ $t('how_it_works.self_hosting_detail') }}
                    </p>
                    <pre id="how-it-works__self_hosted"><code>git clone https://github.com/lesspass/lesspass
cd lesspass
docker-compose up -d</code></pre>

                </div>
            </div>
        </div>
    </div>
</template>