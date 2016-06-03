<style>
    #how-it-works {
        background-color: #025aa5;
        color: #F5F5F5;
    }

    #how-it-works #how-it-works__self_hosted {
        background-color: #323232;
        color: #F5F5F5;
        padding: 1em 1em 0;
    }

</style>
<template>
    <div id="how-it-works">
        <div class="container p-y-6">
            <div class="row p-y-3">
                <div class="col-lg-8">
                    <h3>{{{ $t('how_it_works.title') }}}</h3>
                    <p>
                        {{{ $t('how_it_works.detail') }}}
                    </p>
                </div>
            </div>
            <div class="row p-y-3">
                <div class="col-lg-6 p-t-3">
                    <h5>{{{ $t('how_it_works.always_sync') }}}</h5>
                    <p>
                        {{{ $t('how_it_works.always_sync_detail') }}}
                    </p>
                </div>
                <div class="col-lg-6">
                    <img src="./responsive.png" alt="logo" class="img-fluid">
                </div>
            </div>
            <div class="row p-y-3">
                <div class="col-lg-8">
                    <img src="./extension.gif" alt="logo" class="img-fluid">
                </div>
                <div class="col-lg-4 m-t-3">
                    <h5>{{{ $t('how_it_works.extension') }}}</h5>
                    <p>
                        {{{ $t('how_it_works.extension_detail') }}}
                    </p>
                </div>
            </div>
            <div class="row p-y-3">
                <div class="col-lg-6 p-y-2">
                    <h5>{{{ $t('how_it_works.self_hosting') }}}</h5>
                    <p>
                        {{{ $t('how_it_works.self_hosting_detail') }}}
                    </p>
<pre id="how-it-works__self_hosted"><code>git clone https://github.com/lesspass/lesspass
cd lesspass
docker-compose up -d</code>
          </pre>
                </div>
                <div class="col-lg-6 hidden-xs-down">
                    <div class="row p-t-3">
                        <div class="col-sm-4"><img src="./git-logo.png" alt="logo" class="img-fluid"></div>
                        <div class="col-sm-4"><img src="./docker-logo.png" alt="logo" class="img-fluid"></div>
                        <div class="col-sm-4"><img src="./logo.png" alt="logo" class="img-fluid"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
