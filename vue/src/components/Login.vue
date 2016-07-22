<template>
    <form action="">
                    <div class="form-group row">
                        <div class="col-xs-12">
                            <div class="inner-addon left-addon">
                                <i class="fa fa-user"></i>
                                <input class="form-control" type="text" id="lesspassLogin" placeholder="Login">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-xs-12">
                            <div class="inner-addon left-addon">
                                <i class="fa fa-lock" style=""></i>
                                <input id="password"
                                       name="password"
                                       type="password"
                                       class="form-control"
                                       placeholder="Password"
                                       autocomplete="off"
                                       autocorrect="off"
                                       autocapitalize="none">
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-xs-12">
                            <button id="loginButton" class="btn btn-primary disabled" type="button">
                                Sign In
                            </button>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-xs-12">
                            <a href="https://lesspass.com/#!/register/">Do not have an account ? Register</a>
                        </div>
                    </div>
                </form>
</template>
