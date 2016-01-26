<style>
    #faq .panel {
        margin-bottom: 3rem;
    }
</style>
<template>
    <div id="faq" class="container p-y-3 m-t-2">
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <h3>
                    <a href="#faq">
                        <abbr title="Frequently Asked Questions">FAQ</abbr>
                    </a>
                </h3>

                <section id="faq_works_in_future">
                    <h5 class="blue">{{ $t('faq.q_works_in_future') }}</h5>
                    <p>
                        {{{ $t('faq.a_works_in_future') }}}
                    </p>
                </section>

                <section id="faq_trust">
                    <h5 class="blue">{{ $t('faq.q_trust') }}</h5>
                    <ul>
                        <li>{{{ $t('faq.a_trust_we') }}}&nbsp;;</li>
                        <li>{{{ $t('faq.a_trust_oss') }}}&nbsp;;</li>
                        <li>{{{ $t('faq.a_trust_code') }}}&nbsp;;</li>
                        <li>{{{ $t('faq.a_trust_tracking') }}}&nbsp;;</li>
                        <li>{{{ $t('faq.a_trust_client_side') }}}.</li>
                    </ul>
                    <p>
                        <a class='btn btn-primary btn-sm' href="https://github.com/oslab-fr/lesspass/">
                            {{ $t('faq.source_code') }}
                        </a>
                    </p>
                </section>

                <section id="faq_make_it_safer">
                    <h5 class="blue">{{ $t('faq.q_make_it_safer') }}</h5>
                    <ul>
                        <li>{{{ $t('faq.a_make_it_safer_private') }}}</li>
                        <li>{{{ $t('faq.a_make_it_safer_update') }}}</li>
                    </ul>
                </section>

                <section id="faq_roadmap">
                    <h5 class="blue">{{ $t('faq.q_roadmap') }}</h5>
                    <ul>
                        <li>{{{ $t('faq.a_roadmap_preset_saving') }}}&nbsp;;</li>
                        <li>{{{ $t('faq.a_roadmap_15min_memory') }}}&nbsp;;</li>
                        <li>{{{ $t('faq.a_roadmap_offline_mode') }}}.</li>
                    </ul>
                </section>

                <section id="faq_password_generation">
                    <h5 class="blue">{{ $t('faq.q_password_generation') }}</h5>
                    <p>
                        {{{ $t('faq.a_password_generation') }}}
                    </p>
                    <h5 class="blue">{{ $t('faq.q_pricing') }}</h5>
                    <ul>
                        <li>{{{ $t('faq.a_pricing_free') }}}</li>
                        <li>{{{ $t('faq.a_pricing_enterprise') }}}</li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
</template>
