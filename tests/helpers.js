import assert from 'assert';
import nock from 'nock';

global.assert = assert;
global.nock = nock;

import {LocalStorage} from 'node-localstorage';
const localStorage = new LocalStorage('./tests/localStorage');

export  {localStorage};

after(()=> {
  localStorage._deleteLocation()
});