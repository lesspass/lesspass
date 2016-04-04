import 'vue';
import './locales';
import './router';
import http from './services/http';


window.setInterval(() => {
  let token = localStorage.getItem('token');
  if (token) {
    http.auth.refreshToken(token).then((new_token) => {
      localStorage.setItem('token', new_token)
    })
  }
}, 60 * 60 * 1000);



