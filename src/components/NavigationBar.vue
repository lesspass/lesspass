<style scoped>
    .navbar-light .navbar-nav .nav-link, .navbar-brand{
        color: #555;

        text-decoration: none;
    }
</style>
<template>
    <nav class="navbar navbar-light bg-faded hidden-sm-down">
        <div class="container">
            <button class="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse"
                    data-target="#exCollapsingNavbar2" aria-controls="exCollapsingNavbar2" aria-expanded="false"
                    aria-label="Toggle navigation">
                &#9776;
            </button>
            <div class="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
                <a class="navbar-brand" href="/">
                    LessPass
                </a>
                <ul class="nav navbar-nav pull-xs-right">
                    <li class="nav-item">
                        <a class="nav-link" href="https://addons.mozilla.org/en-US/firefox/addon/lesspass/">
                            <i class="fa fa-firefox" aria-hidden="true"></i> Firefox extension
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           href="https://chrome.google.com/webstore/detail/lesspass/lcmbpoclaodbgkbjafnkbbinogcbnjih">
                            <i class="fa fa-chrome" aria-hidden="true"></i> Chrome extension
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>