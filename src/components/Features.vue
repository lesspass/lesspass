<style scoped>
    .container {
        color: #ffffff;
    }

    .feature-image {
        width: 64px;
    }

    .white-link {
        color: white;
        text-decoration: underline;
    }
</style>
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-lg-3 m-b-3">
                <div class="media">
                    <div class="media-left">
                        <img class="media-object feature-image" src="../images/responsive.png"
                             alt="Generic placeholder image">
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">Available everywhere</h4>
                        <p>
                            LessPass is a web application and works on all devices (computer, smartphone, tablet
                            and
                            your smartTV)
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 m-b-3">
                <div class="media">
                    <div class="media-left">
                        <img class="media-object feature-image" src="../images/no-cloud.png"
                             alt="Generic placeholder image">
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">No storage</h4>
                        <p>
                            LessPass regenerates your passwords when you need them. No cloud storage is required
                        </p>
                    </div>
                </div>
            </div>
            <div class="clearfix hidden-lg-up"></div>
            <div class="col-md-6 col-lg-3 m-b-3">
                <div class="media">
                    <a class="media-left" href="https://github.com/lesspass/lesspass/">
                        <img class="media-object feature-image" src="../images/open-source.png"
                             alt="Generic placeholder image">
                    </a>
                    <div class="media-body">
                        <h4 class="media-heading">Open Source</h4>
                        <p>
                            LessPass is <strong>open-source</strong>. So its security can be audited. Source
                            code is available on <a class="white-link"
                                                    href="https://github.com/lesspass/lesspass/">Github</a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-lg-3 m-b-3">
                <div class="media">
                    <div class="media-left">
                        <img class="media-object feature-image" src="../images/free.png"
                             alt="Generic placeholder image">
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">Free</h4>
                        <p>
                            LessPass is free<br>and always will be
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>