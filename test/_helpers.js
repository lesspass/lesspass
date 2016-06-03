const entriesGetAll = {
  "count": 3,
  "next": null,
  "previous": null,
  "results": [{
    "id": "535a439d-49cf-4b32-844f-d367640a0a9b",
    "site": "facebook.com",
    "login": "test@lesspass.com",
    "password": {"counter": 1, "settings": ["lowercase", "uppercase", "numbers", "symbols"], "length": 12},
    "created": "2016-04-06T11:34:46.719242",
    "modified": "2016-04-06T11:34:46.719265"
  }, {
    "id": "a45b8a54-485f-4e8e-a03e-9d2ae169514c",
    "site": "twitter.com",
    "login": "test@lesspass.com",
    "password": {"counter": 10, "settings": ["lowercase", "uppercase", "numbers", "symbols"], "length": 14},
    "created": "2016-04-06T11:32:15.537767",
    "modified": "2016-04-06T11:33:46.951174"
  }, {
    "id": "d7fe3061-cb3b-492e-bc1e-b88c79acaa0c",
    "site": "lesspass.com",
    "login": "test@lesspass.com",
    "password": {"counter": 1, "settings": ["lowercase", "uppercase", "numbers", "symbols"], "length": 12},
    "created": "2016-04-06T11:27:49.962268",
    "modified": "2016-04-06T11:31:05.975255"
  }]
};
export {entriesGetAll};

var entriesGetOne = JSON.parse(JSON.stringify(entriesGetAll.results[0]));
export {entriesGetOne};
