import { getHTTP } from './http';

export default {
  create(entry) {
    return getHTTP(localStorage).post('/api/entries/', entry)
      .then((response) => {
        return response;
      });
  },
  all(){
    return getHTTP(localStorage).get('/api/entries/')
      .then((response) => {
        return response;
      });
  }
};
