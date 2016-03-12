<style>
    #footer {
        background-color: #202020;
        color: #f2f2f2;
        font-size: 0.8em;
    }

    #footer a{
        color: inherit;
    }
</style>
<template>
    <div id="footer" class="text-xs-center">
        <div class="container">
            <div class="row p-t-3 p-b-1">
                <div class="col-lg-12 p-t-3 p-b-1 text-xs-right">
                    <p>
                        &copy; LessPass
                        - {{ $t('footer.created_by') }} <a href="mailto:guillaume@oslab.fr">Guillaume Vincent</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>