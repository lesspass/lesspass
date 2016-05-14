import test from 'ava';
import {getLoginForm} from '../extension/form-parser';

test('get login form', t => {
  global.document = require('jsdom').jsdom('<!doctype html><html><body><form><input type="password"></form></body></html>');
  global.window = document.defaultView;
  global.navigator = window.navigator;

  const loginForm = getLoginForm();
  const expectedForm = document.forms[0];
  t.is(expectedForm, loginForm.form);
});

test('get first login form with password field in it', t => {
  global.document = require('jsdom').jsdom(`
  <!doctype html>
  <html>
  <body>
  <form></form>
  <form id="second-form">
      <input type="password">
  </form>
  </body>
  </html>`);
  global.window = document.defaultView;
  global.navigator = window.navigator;

  const loginForm = getLoginForm();
  const expectedForm = document.getElementById('second-form');
  t.is(expectedForm, loginForm.form);
});

test('get password field', t => {
  global.document = require('jsdom').jsdom(`
  <!doctype html>
  <html>
  <body>
  <form>
      <input id="password-field" type="password">
  </form>
  </body>
  </html>`);
  global.window = document.defaultView;
  global.navigator = window.navigator;

  const loginForm = getLoginForm();
  const expectPasswordField = document.getElementById('password-field');
  t.is(expectPasswordField, loginForm.passwordField);
});

test('get login field', t => {
  global.document = require('jsdom').jsdom(`
  <!doctype html>
  <html>
  <body>
  <form>
      <input id="login-field" type="text">
      <input id="password-field" type="password">
  </form>
  </body>
  </html>`);
  global.window = document.defaultView;
  global.navigator = window.navigator;

  const loginForm = getLoginForm();
  const expectedLoginField = document.getElementById('login-field');
  t.is(expectedLoginField, loginForm.loginField);
});

test('get real example', t => {
  global.document = require('jsdom').jsdom(`
 <!doctype html>
 <html>
 <body>
 <form class="form signin" method="post">
   <div class="username field">
     <input type="text" id="signin-email" class="text-input email-input"
        name="username_or_email" placeholder="Phone, email or username"/>
   </div>
   <div class="password field">
     <input type="password" id="signin-password" class="text-input password-input"
        name="password" placeholder="Password">
   </div>
 </form>
 </body>
 </html>`);
  global.window = document.defaultView;
  global.navigator = window.navigator;
  const loginForm = getLoginForm();
  t.is(document.forms[0], loginForm.form);
  t.is(document.getElementById('signin-email'), loginForm.loginField);
  t.is(document.getElementById('signin-password'), loginForm.passwordField);
});
