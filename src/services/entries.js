import axios from 'axios';

export default class Entry {
  constructor(localStorage = global.localStorage) {
    this.localStorage = localStorage;
    this.request = axios.create({
      headers: {'Authorization': 'JWT ' + this.localStorage.getItem('token')}
    });
  }

  create(entry) {
    return this.request.post('/api/entries/', entry)
      .then((response) => {
        return response;
      });
  }

  all() {
    return this.request.get('/api/entries/')
      .then((response) => {
        return response;
      });
  }
};
