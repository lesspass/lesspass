<template>
    <form action="">
        <div class="form-group row">
            <div class="col-xs-12">
                <div class="inner-addon left-addon">
                    <i class="fa fa-globe"></i>
                    <input class="form-control" type="text" id="site" placeholder="Site">
                </div>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                <div class="inner-addon left-addon">
                    <i class="fa fa-user"></i>
                    <input class="form-control" type="text" id="login" placeholder="Login">
                </div>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                <div class="inner-addon left-addon input-group">
                    <i class="fa fa-lock"></i>
                    <input id="masterPassword"
                           name="masterPassword"
                           type="password"
                           class="form-control"
                           placeholder="Master password"
                           autocomplete="off"
                           autocorrect="off"
                           autocapitalize="none">
                    <span class="input-group-btn" style="display:none;">
                      <button id="fingerprint" class="btn" type="button"
                              style="background-color:rgb(96, 227, 180);">
                        1234fa
                      </button>
                    </span>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                <div class="input-group">
                    <label for="generatedPassword" class="sr-only">Password Generated</label>
                    <input id="generatedPassword"
                           name="generatedPassword"
                           type="text"
                           class="form-control"
                           tabindex="-1"
                           readonly>
                    <span class="input-group-btn">
                      <button id="copyPasswordButton" class="btn-copy btn btn-primary disabled"
                              type="button"
                              data-clipboard-target="#generatedPassword">
                        <i class="fa fa-clipboard white"></i> Copy
                      </button>
                    </span>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                Password options
                <hr style="margin:0;">
            </div>
        </div>
        <div class="form-group row">
            <div class="col-xs-12">
                <label class="form-check-inline">
                    <input class="form-check-input" type="checkbox" id="lowercase" checked> abc
                </label>
                <label class="form-check-inline">
                    <input class="form-check-input" type="checkbox" id="uppercase" checked> ABC
                </label>
                <label class="form-check-inline">
                    <input class="form-check-input" type="checkbox" id="number" checked> 123
                </label>
                <label class="form-check-inline">
                    <input class="form-check-input" type="checkbox" id="symbol" checked> %!@
                </label>
            </div>
        </div>
        <div class="form-group row">
            <label for="passwordLength" class="col-xs-3 col-form-label">Length</label>
            <div class="col-xs-3 p-l-0">
                <input class="form-control" type="number" value="12" id="passwordLength">
            </div>
            <label for="passwordCounter" class="col-xs-3 col-form-label">Counter</label>
            <div class="col-xs-3 p-l-0">
                <input class="form-control" type="number" value="1" id="passwordCounter">
            </div>
        </div>
    </form>
</template>
