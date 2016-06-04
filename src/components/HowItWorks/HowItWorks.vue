<style>
    #how-it-works {
        background-color: #025aa5;
        color: #F5F5F5;
    }

    #how-it-works #how-it-works__self_hosted {
        background-color: #424242;
        color: #F5F5F5;
        padding: 1em 1em 0;
    }

</style>
<template>
    <div id="how-it-works">
        <div class="container p-y-6">
            <div class="row p-y-3">
                <div class="col-lg-8">
                    <h2>{{{ $t('howItWorks.title') }}}</h2>
                    <p>
                        {{{ $t('howItWorks.detail') }}}
                    </p>
                </div>
            </div>
            <div class="row p-y-3">
                <div class="col-lg-6 p-t-3">
                    <h4>{{{ $t('howItWorks.alwaysSync') }}}</h4>
                    <p>
                        {{{ $t('howItWorks.alwaysSyncDetail') }}}
                    </p>
                </div>
                <div class="col-lg-6">
                    <img src="responsive.png" alt="logo" class="img-fluid">
                </div>
            </div>
            <div class="row p-y-3">
                <div class="col-lg-8">
                    <h4>{{{ $t('howItWorks.extension') }}}</h4>
                    <p>
                        {{{ $t('howItWorks.extensionDetail') }}}
                    </p>
                </div>
            </div>
            <div class="row m-b-3">
                <div class="col-lg-10">
                    <img src="extension.gif" alt="logo" class="img-fluid">
                </div>
            </div>
            <div class="row p-y-3">
                <div class="col-lg-8">
                    <h4>{{{ $t('howItWorks.connectedApp') }}} <span class="label label-warning">beta</span></h4>
                    <p>
                        {{{ $t('howItWorks.connectedAppDetail') }}}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-10">
                    <img src="webapp.png" alt="web app" class="img-fluid" style="box-shadow: 0 1px 4px 0 rgba(0,0,0,0.2);">
                </div>
            </div>
            <div class="row p-y-3">
                <div class="col-lg-6 m-t-3">
                    <h4>{{{ $t('howItWorks.selfHosted') }}}</h4>
                    <p>
                        {{{ $t('howItWorks.selfHostingDetail') }}}
                    </p>
<pre id="how-it-works__self_hosted"><code>git clone https://github.com/lesspass/lesspass
cd lesspass
docker-compose up -d</code>
          </pre>
                </div>
                <div class="col-lg-6">
                    <div class="row m-t-3">
                        <div class="col-sm-4"><img src="git-logo.png" alt="git logo" class="img-fluid"></div>
                        <div class="col-sm-4"><img src="docker-logo.png" alt="docker logo" class="img-fluid"></div>
                        <div class="col-sm-4"><img src="logo.png" alt="lesspass logo" class="img-fluid"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
