/**
 * Created by Ylwoi on 2017-06-13.
 */

class Ajax {

  constructor() {
    this.xhr = new XMLHttpRequest();
    this.root = 'https://equal-koala.glitch.me';
    this.headers = new Headers({'X-poker-token': window.sessionStorage.accesToken});
  }

  postLogin(callback, data) {
    this.xhr.open('POST', this.root + '/login', true);
    this.xhr.setRequestHeader('Content-Type', 'application/json');
    this.xhr.setRequestHeader('Accept', 'application/json');
    this.xhr.send(data);
    this.xhr.onreadystatechange = () => {
      if (this.xhr.readyState === 4 && this.xhr.status === 200) {
        callback(JSON.parse(this.xhr.response))
      }
    }
  };

  postSignUp(callback, data) {
    this.xhr.open('POST', this.root + '/register', true);
    this.xhr.setRequestHeader('Content-Type', 'application/json');
    this.xhr.setRequestHeader('Accept', 'application/json');
    this.xhr.send(data);
    this.xhr.onreadystatechange = () => {
      if (this.xhr.readyState === 4 && this.xhr.status === 200) {
        callback(JSON.parse(this.xhr.response))
      }
    }
  };

  loadData(endpoint) {
    return new Promise((resolve, reject) => {
      fetch(this.root + endpoint, {
        method: 'GET',
        headers: this.headers
      }).then( res => {
        res.json().then( data => {
          resolve(data)
        });
      });
    })
  }

}

export default Ajax;