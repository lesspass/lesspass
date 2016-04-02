import assert from 'assert';
import nock from 'nock';
import {LocalStorage} from 'node-localstorage';

// setup
before(()=> {
  global.localStorage = new LocalStorage('./tests/localStorage');
  global.assert = assert;
  global.nock = nock;
});
beforeEach(()=> {
});

// teardown
after(()=> {
});
afterEach(()=> {
});