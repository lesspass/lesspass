<style>
    #footer {
        background-color: #1B2529;
        color: #7A8491;
    }
</style>
<template>
    <div id="footer" class="text-xs-center">
        <div class="container">
            <div class="row p-y-3">
                <div class="col-lg-12">
                    <img src="./logo.png" alt="logo">
                </div>
            </div>
            <div class="row p-y-3">
                <div class="col-lg-12">
                    <p class="lead">
                        &copy; LessPass
                        - {{ $t('footer.built_by') }} <a href="mailto:guillaume@oslab.fr">Guillaume Vincent</a>
                        - <a href="https://github.com/lesspass">{{ $t('footer.contribute') }}</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>