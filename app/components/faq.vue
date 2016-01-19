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

                <h5 class="blue">{{ $t('q1') }}</h5>
                <p>
                    {{ $t('a1') }}
                </p>

                <h5 class="blue">{{ $t('q2') }}</h5>
                <p>
                    {{ $t('a2') }}
                </p>
                <p>
                    <a class='btn btn-primary btn-sm' href="https://github.com/oslab-fr/lesspass/">
                        {{ $t('source_code') }}
                    </a>
                </p>
                <h5 class="blue">{{ $t('q3') }}</h5>

                <p>
                    {{ $t('a3') }}
                </p>
                <h5 class="blue">{{ $t('q4') }}</h5>

                <ul>
                    <li>{{ $t('a4a') }}</li>
                    <li>{{ $t('a4b') }}</li>
                    <li>{{ $t('a4c') }}</li>
                </ul>
                <h5 class="blue">{{ $t('q5') }}</h5>

                <p>
                    {{ $t('a5') }}
                </p>
                <h5 class="blue">{{ $t('q6') }}</h5>
                <p>
                    {{ $t('a6') }}
                </p>
            </div>
        </div>
    </div>
</template>
