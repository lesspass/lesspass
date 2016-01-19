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
                <div id="accordion" role="tablist" aria-multiselectable="true">
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingOne">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
                                   aria-expanded="true"
                                   aria-controls="collapseOne">
                                    {{ $t('q1') }}
                                </a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel"
                             aria-labelledby="headingOne">
                            {{ $t('a1') }}
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingTwo">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"
                                   aria-expanded="true" aria-controls="collapseTwo">
                                    {{ $t('q2') }}
                                </a>
                            </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse in" role="tabpanel"
                             aria-labelledby="headingTwo">
                            {{ $t('a2') }}
                            <p>
                                <a class='btn btn-primary m-t-1' href="https://github.com/oslab-fr/lesspass/">
                                    {{ $t('source_code') }}
                                </a>
                            </p>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingThree">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree"
                                   aria-expanded="true" aria-controls="collapseThree">
                                    {{ $t('q3') }}
                                </a>
                            </h4>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse in" role="tabpanel"
                             aria-labelledby="headingThree">
                            {{ $t('a3') }}
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingFour">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseFour"
                                   aria-expanded="true" aria-controls="collapseFour">
                                    {{ $t('q4') }}
                                </a>
                            </h4>
                        </div>
                        <div id="collapseFour" class="panel-collapse collapse in" role="tabpanel"
                             aria-labelledby="headingFour">
                            <ul>
                                <li>{{ $t('a4a') }}</li>
                                <li>{{ $t('a4b') }}</li>
                                <li>{{ $t('a4c') }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingFive">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseFive"
                                   aria-expanded="true" aria-controls="collapseFive">
                                    {{ $t('q5') }}
                                </a>
                            </h4>
                        </div>
                        <div id="collapseFive" class="panel-collapse collapse in" role="tabpanel"
                             aria-labelledby="headingFive">
                            {{ $t('a5') }}
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading" role="tab" id="headingSix">
                            <h4 class="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseSix"
                                   aria-expanded="true" aria-controls="collapseSix">
                                    {{ $t('q6') }}
                                </a>
                            </h4>
                        </div>
                        <div id="collapseSix" class="panel-collapse collapse in" role="tabpanel"
                             aria-labelledby="headingSix">
                            {{ $t('a6') }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import collapse from 'bootstrap/dist/js/umd/collapse.js'
</script>