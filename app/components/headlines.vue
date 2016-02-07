<style>
    .headlines {
        color: #252830;
        background-color: #D8E4EA;
        padding: 5em 0 7em;
    }

    .headlines .title {
        font-size: 1.5rem;
    }

    .headlines .subtitle {
        font-size: 1.3rem;
    }

    @media (min-width: 550px) {
        .headlines .title {
            font-size: 2.5rem;
        }
    }
</style>
<template>
    <section class="headlines text-xs-center">
        <div class="container">
            <div class="col-lg-10 col-lg-offset-1">
                <h2 class="title text-primary">{{{ $t('header.title') }}}</h2>
                <h4 class="subtitle hidden-xs-down">
                    <span class="text-primary"> LessPass</span> {{ $t('header.subtitle') }}
                </h4>
            </div>
        </div>
    </section>
</template>