<style>
    #faq .panel {
        margin-bottom: 3rem;
    }
</style>
<template>
    <div id="faq" class="container p-y-3 m-t-2">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h3>FAQ :</h3>

                <h5 class="blue">{{ $t('faq.q1') }}</h5>
                <p>
                    {{ $t('faq.a1') }}
                </p>

                <h5 class="blue">{{ $t('faq.q2') }}</h5>
                <p>
                    {{ $t('faq.a2') }}
                </p>
                <p>
                    <a class='btn btn-primary btn-sm' href="https://github.com/oslab-fr/lesspass/">
                        {{ $t('faq.source_code') }}
                    </a>
                </p>
                <h5 class="blue">{{ $t('faq.q3') }}</h5>

                <p>
                    {{ $t('faq.a3') }}
                </p>
                <h5 class="blue">{{ $t('faq.q4') }}</h5>

                <ul>
                    <li>{{ $t('faq.a4a') }}</li>
                    <li>{{ $t('faq.a4b') }}</li>
                    <li>{{ $t('faq.a4c') }}</li>
                </ul>
                <h5 class="blue">{{ $t('faq.q5') }}</h5>

                <p>
                    {{ $t('faq.a5') }}
                </p>
                <h5 class="blue">{{ $t('faq.q6') }}</h5>
                <p>
                    {{ $t('faq.a6') }}
                </p>
            </div>
        </div>
    </div>
</template>
