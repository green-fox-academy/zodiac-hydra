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

let getTables = function () {
  xhr.open('GET', root + '/tables', true);
  xhr.send();
  xhr.onreadystatechange = function () {
    console.log(xhr.response)
  }
};

let getLeaderBoard = function () {
  xhr.open('GET', root + '/leaderboard', true);
  xhr.send();
  xhr.onreadystatechange = function () {
    console.log(xhr.response)
  }
};

module.exports = {postLogin, getTables, getLeaderBoard};
