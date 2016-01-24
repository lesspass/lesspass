<style>

    .form-signin .form-signin-heading,
    .form-signin .checkbox {
        margin-bottom: 10px;
    }

    .form-signin .checkbox {
        font-weight: normal;
    }

    .form-signin .form-control {
        position: relative;
        height: auto;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 10px;
        font-size: 16px;
    }

    .form-signin .form-control:focus {
        z-index: 2;
    }

    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 col-md-offset-1 m-t-3">
                <form class="form-signin">
                    <h2 class="form-signin-heading">Please sign in</h2>
                    <label for="inputEmail" class="sr-only">Email address</label>
                    <input id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""
                           type="email">
                    <label for="inputPassword" class="sr-only">Password</label>
                    <input id="inputPassword" class="form-control" placeholder="Password" required="" type="password">

                    <button class="btn btn-primary btn-block" type="submit">Log in</button>
                </form>
            </div>

            <div class="col-md-4 col-md-offset-2 m-t-3">
                <form class="form-signin">
                    <h2 class="form-signin-heading">Sign up for free</h2>
                    <label for="signUpEmail" class="sr-only">Email address</label>
                    <input id="signUpEmail" class="form-control" placeholder="Email address" required="" autofocus=""
                           type="email">
                    <label for="signUpPassword" class="sr-only">Password</label>
                    <input id="signUpPassword" class="form-control" placeholder="Password" required="" type="password">

                    <button class="btn btn-primary btn-block" type="submit">Get started</button>
                </form>
            </div>
        </div>
    </div>
</template>