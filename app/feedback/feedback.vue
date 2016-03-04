<style>
    .lesspass-feedback {
        background-color: #134a6a;
        color: #D3D8E8;
    }

    .lesspass-feedback .thumbnail {
        width: 42px;
    }
</style>
<template>
    <div class="lesspass-feedback p-y-3">
        <div class="container">
            <div class="row m-y-3">
                <div class="col-lg-10 col-lg-offset-1">
                    <div class="media">
                        <a class="media-left" href="#">
                            <img src="./el.jpg" alt="Edouard Lopez" class="img-circle thumbnail">
                        </a>
                        <div class="media-body">
                            <h4 class="media-heading">{{{ $t('feedback.feedback_1') }}}</h4>
                            <p>{{{ $t('feedback.feedback_1_author') }}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row m-y-3">
                <div class="col-lg-10 col-lg-offset-1">
                    <div class="media">
                        <div class="media-body text-xs-right">
                            <h4 class="media-heading">{{{ $t('feedback.feedback_2') }}}</h4>
                            <p>{{{ $t('feedback.feedback_2_author') }}}</p>
                        </div>
                        <a class="media-right" href="#">
                            <img src="./gv.jpg" alt="guillaume vincent" class="img-circle thumbnail">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<!--

<style>
    .lesspass-feedback {
        background-color: #252830;
        color: #D3D8E8;
    }

    .lesspass-feedback .thumbnail {
        width: 42px;
    }

</style>
<template>
    <div class="lesspass-feedback p-y-3">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2">
                    <blockquote class="blockquote m-b-3">
                        <p class="m-b-0">
                            <img src="../assets/images/el.jpg" alt="Edouard Lopez" class="img-circle thumbnail">
                            {{{ $t('feedback.feedback_1') }}}
                        </p>
                        <footer class="blockquote-footer">{{{ $t('feedback.feedback_1_author') }}}</footer>
                    </blockquote>
                    <blockquote class="blockquote m-y-3 blockquote-reverse">
                        <p class="m-b-0">
                            {{{ $t('feedback.feedback_2') }}}
                            <img src="../assets/images/gv.jpg" alt="guillaume vincent" class="img-circle thumbnail">
                        </p>
                        <footer class="blockquote-footer">{{{ $t('feedback.feedback_2_author') }}}</footer>
                    </blockquote>

                    <blockquote class="blockquote">
                        <p class="m-b-0">
                            &lt;!&ndash;<img src="" alt="..." class="img-circle thumbnail">&ndash;&gt;
                            {{{ $t('feedback.what_do_you_think') }}}
                        </p>
                        <footer class="blockquote-footer">
                            <a href="mailto:contact@oslab.fr">{{{ $t('feedback.send_us_email') }}}</a>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
</template>-->
