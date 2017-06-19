/**
 * Created by Ylwoi on 2017-06-13.
 */
const xhr = new XMLHttpRequest();

const root = 'https://equal-koala.glitch.me';

let postLogin = function (callback, data) {
    xhr.open('POST', root + '/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.response))
        }
    }
};

let postSignUp = function (callback, data) {
  xhr.open('POST', root + '/register', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.send(data);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(JSON.parse(xhr.response))
    }
  }
};

module.exports = {postLogin, postSignUp};
