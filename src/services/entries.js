import request from 'axios';

export default {
  create(entry) {
    return request.post('/api/entries/', entry)
      .then((response) => {
        return response;
      });
  },
  all(){
    return request.get('/api/entries/')
      .then((response) => {
        return response;
      });
  }
};
