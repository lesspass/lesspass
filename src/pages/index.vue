<style scoped>
    *{
         color: #FFFFFF;
    }

    .media-object {
        width: 64px;
    }
</style>
<template>
    <div id="landing-page">
        <div class="m-y-1" id="navbar">
            <div class="container">
                <div class="row">
                    <lesspass-header></lesspass-header>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div id="hero" class="col-md-6 hidden-xs-down">
                    <h1 class="hero__title p-t-2">
                        {{{ $t('index.title') }}}
                    </h1>
                    <h4 class="hero__subtitle">
                        {{{ $t('index.subtitle') }}}
                    </h4>
                </div>
                <div class="col-md-6 p-a-0">
                    <password-generator></password-generator>
                </div>
            </div>
        </div>
        <div class="container m-t-3 p-t-3">
            <div class="row">
                <div class="col-md-6 col-lg-3 m-b-3">
                    <div class="media">
                        <div class="media-left">
                            <img class="media-object" src="../images/responsive.png" alt="Generic placeholder image">
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">{{{ $t('features.responsiveTitle') }}}</h4>
                            <p>
                                {{{ $t('features.responsive') }}}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 m-b-3">
                    <div class="media">
                        <div class="media-left">
                            <img class="media-object" src="../images/no-cloud.png" alt="Generic placeholder image">
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">{{{ $t('features.noCloudTitle') }}}</h4>
                            <p>
                                {{{ $t('features.noCloud') }}}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 m-b-3">
                    <div class="media">
                        <a class="media-left" href="https://github.com/lesspass/lesspass/">
                            <img class="media-object" src="../images/open-source.png" alt="Generic placeholder image">
                        </a>
                        <div class="media-body">
                            <h4 class="media-heading">{{{ $t('features.openSourceTitle') }}}</h4>
                            <p>
                                {{{ $t('features.openSource') }}}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 m-b-3">
                    <div class="media">
                        <div class="media-left">
                            <img class="media-object" src="../images/free.png" alt="Generic placeholder image">
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">{{{ $t('features.freeTitle') }}}</h4>
                            <p>
                                {{{ $t('features.free') }}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container m-y-3 text-xs-center text-sm-left">
            <div class="row">
                <div class="col-xs-12">
                    <small>
                        Copyright LessPass <br>
                        {{ $t('footer.createdBy') }} <a class="white-link" href="https://twitter.com/guillaume20100">Guillaume Vincent</a>
                    </small>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import LesspassHeader from '../components/LesspassHeader';
    import PasswordGenerator from '../components/PasswordGenerator/PasswordGenerator';

    export default {
        data() {
            return {};
        },
        components: {
            LesspassHeader,
            PasswordGenerator
        }
    };
</script>

