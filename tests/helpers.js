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

const entriesGetAll = {
  "count": 5,
  "next": null,
  "previous": null,
  "results": [{
    "id": "d7ef8d1e-b5e3-4227-926b-29f236c49c6b",
    "site": "site 1",
    "password": {"counter": 1, "settings": ["lowercase", "uppercase", "numbers", "symbols"], "length": 12},
    "title": null,
    "username": null,
    "email": "test@lesspass.com",
    "description": null,
    "url": null,
    "created": "2016-04-04T12:59:42.815400",
    "modified": "2016-04-04T12:59:42.815431"
  }, {
    "id": "1e532990-66c4-4522-b033-ce6ee13b37c5",
    "site": "site 2",
    "password": {"counter": 1, "settings": ["lowercase", "uppercase", "numbers", "symbols"], "length": 12},
    "title": null,
    "username": null,
    "email": "test@lesspass.com",
    "description": null,
    "url": null,
    "created": "2016-04-04T12:59:19.005800",
    "modified": "2016-04-04T12:59:19.005821"
  }, {
    "id": "61dc47cc-9f78-4ad1-acda-61914227b2cd",
    "site": "site 3",
    "password": {"counter": 1, "settings": ["lowercase", "uppercase", "numbers", "symbols"], "length": 12},
    "title": null,
    "username": null,
    "email": "test@lesspass.com",
    "description": null,
    "url": null,
    "created": "2016-04-04T08:12:06.686885",
    "modified": "2016-04-04T08:12:06.686909"
  }, {
    "id": "57a3e0ac-08a4-447b-831c-7863896ea210",
    "site": "site 4",
    "password": {"counter": 1, "settings": ["lowercase", "uppercase", "numbers", "symbols"], "length": 12},
    "title": null,
    "username": null,
    "email": "    test@lesspass.com",
    "description": null,
    "url": null,
    "created": "2016-04-04T08:11:55.130015",
    "modified": "2016-04-04T08:11:55.130037"
  }, {
    "id": "772abd32-5712-48c0-ba81-8a1a3748757e",
    "site": "site 5",
    "password": {"counter": 1, "settings": ["lowercase", "uppercase", "numbers", "symbols"], "length": 12},
    "title": null,
    "username": null,
    "email": "    test@lesspass.com",
    "description": null,
    "url": null,
    "created": "2016-04-01T19:57:15.738606",
    "modified": "2016-04-01T19:57:15.738627"
  }]
};
export {entriesGetAll};
