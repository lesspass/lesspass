import test from 'ava';
import jsdom from 'jsdom';
import {getLoginForm, getScore, getBestByScore, getFormInfo} from '../extension/form-parser';

test('form get a score of 10 if with a Log in button', t => {
  const document = jsdom.jsdom(`<form><button type="submit"> Log in </button></form>`);
  t.is(getScore(document.forms[0]), 10);
});

test('form get a score of 10 with a Sign in button', t => {
  const document = jsdom.jsdom(`<form><button type="submit"> Sign In </button></form>`);
  t.is(getScore(document.forms[0]), 10);
});

test('form get a score case insensitive', t => {
  const document = jsdom.jsdom(`<form><button type="submit">lOg iN</button></form>`);
  t.is(getScore(document.forms[0]), 10);
});

test('form get a score of 10 if input type submit', t => {
  const document = jsdom.jsdom(`<form><input value="Log In" type="submit"/></form>`);
  t.is(getScore(document.forms[0]), 10);
});

test('form get a score of 0 if form not a login or signup form', t => {
  const document = jsdom.jsdom(`<form><input value="title" type="text"/></form>`);
  t.is(getScore(document.forms[0]), 0);
});

test('filter forms based on score', t => {
  const form1 = {score: 0, el: {}};
  const form2 = {score: 4, el: {}};
  t.is(getBestByScore([form1, form2]), form2);
});

test('filter empty forms array', t => {
  t.is(getBestByScore([]), null);
});

test('get login form', t => {
  const document = jsdom.jsdom(`<!doctype html><html><body>
<form action="/signup" method="post">
    <input name="user[name]" maxlength="20" placeholder="Full name" type="text">
    <input name="user[email]" placeholder="Email" type="text">
    <input name="user[user_password]" placeholder="Password" type="password">
    <button type="submit">
        Sign up for Twitter
    </button>
</form>
<form  id="loginForm" action="/sessions" method="post">
    <input id="signin-email" name="session[username_or_email]" placeholder="Phone, email or username" type="text">
    <input id="signin-password" name="session[password]" placeholder="Password" type="password">
    <button type="submit">
        Log in
    </button>
</form>
</body></html>`);
  t.is(getLoginForm(document), document.getElementById('loginForm'));
});

test('get no form if not password field in', t => {
  const document = jsdom.jsdom(`<!doctype html><html><body><form><input value="title" type="text"/></form></body></html>`);
  t.is(getLoginForm(document), null);
});

test('get usefull field in form', t => {
  const document = jsdom.jsdom(`<form><input id="passwordField" type="password" name="password"/></form>`);
  t.is(getFormInfo(document.forms[0]).passwordField, document.getElementById('passwordField'));
  t.is(getFormInfo(document.forms[0]).loginField, null);
  t.is(getFormInfo(document.forms[0]).button, null);
});

test('test get option fields in form', t => {
  const document = jsdom.jsdom(`<form><input id="usernameField" type="text" name="username"/><input type="password" name="password"/><button>Cancel</button><button id="button" type="submit">Sign In</button></form>`);
  t.is(getFormInfo(document.forms[0]).loginField, document.getElementById('usernameField'));
  t.is(getFormInfo(document.forms[0]).button, document.getElementById('button'));
});

test('test real form 1', t => {
  const document = jsdom.jsdom(`<!doctype html><html><body> <form>
    <fieldset class="form-group"><p class="text-muted"> Happy to see you here again </p>
        <label for="email" class="sr-only">login.email</label>
        <input type="text" class="form-control" id="email" autofocus="" placeholder="Enter your email">
    </fieldset>
    <fieldset class="form-group">
        <label for="password" class="sr-only">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Enter your Password">
    </fieldset>
    <button id="button" type="submit" class="btn btn-primary btn-block">Sign In</button>
    <fieldset class="form-group p-t-1">
        <a href="#!/register/"><u>Do not have an account ? Sign in</u></a>
    </fieldset>
</form></body></html>
  `);
  t.is(getFormInfo(document.forms[0]).passwordField, document.getElementById('password'));
  t.is(getFormInfo(document.forms[0]).loginField, document.getElementById('email'));
  t.is(getFormInfo(document.forms[0]).button, document.getElementById('button'));
});
