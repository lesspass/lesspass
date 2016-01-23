<style>
    footer {
        font-size: 0.7rem;
        font-family: Consolas, DejaVu Sans Mono, Courier, monospace;
    }
</style>
<template>
    <footer class="text-xs-center">
        <div class="container">
            <div class="row p-y-3">
                <div class="col-lg-12">
                    <p>
                        <img src="../assets/images/logo.png" alt="logo">
                    </p>
                </div>
            </div>
            <div class="row p-y-3">
                <div class="col-lg-12">
                    <p>
                        &copy; LessPass
                        - {{ $t('footer.built_by') }} <a href="mailto:guillaume@oslab.fr">Guillaume Vincent</a>
                        - <a href="https://github.com/oslab-fr/lesspass">{{ $t('footer.source_code') }}</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>