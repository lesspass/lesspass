<style>
    .lesspass-features {
        background-color: #0275D8;
        color: #D3D8E8;
    }

    .lesspass-features ul {
        line-height: 1.8em;
        font-size: 1.15em;
        margin: 0 auto;
        padding: 0;
        list-style-type: none;
    }

    .lesspass-features ul li::before {
        content: "";
        display: inline-block;
        width: 24px;
        height: 24px;
        background: transparent url("../assets/images/check.png") no-repeat scroll center center / 24px 24px;
        margin-right: 10px;
        position: relative;
        top: 4px;
    }
</style>
<template>
    <div class="lesspass-features p-y-3">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <h3>{{ $t('features.you_should_use_lesspass') }}</h3>
                    <ul>
                        <li>{{{ $t('features.unique_password') }}}&nbsp;;</li>
                        <li>{{{ $t('features.love_open_source') }}}&nbsp;;</li>
                        <li>{{{ $t('features.works_everywhere') }}}&nbsp;;</li>
                        <li>{{{ $t('features.no_cloud') }}}&nbsp;;</li>
                        <li>{{{ $t('features.only_one_password') }}}.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>