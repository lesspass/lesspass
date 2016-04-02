import axios from 'axios';

let request = null;

export function getHTTP(localStorage) {
  if (!request) {
    request = axios.create({
      headers: {'Authorization': 'JWT ' + localStorage.getItem('token')}
    });
  }
  return request;
}
