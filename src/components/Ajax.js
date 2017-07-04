/**
 * Created by Ylwoi on 2017-06-13.
 */

class Ajax {

  constructor() {
    this.root = 'https://equal-koala.glitch.me';
    this.getHeaders = new Headers({'X-poker-token': window.sessionStorage.accessToken});
    this.postHeaders = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json', 'X-poker-token': window.sessionStorage.accessToken})
    this.putHeaders = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json', 'X-poker-token': window.sessionStorage.accessToken})
  }

  postData(endpoint, dataToSend) {
    return new Promise((resolve, reject) => {
      fetch(this.root + endpoint, {
        method: 'POST',
        headers: this.postHeaders,
        body: JSON.stringify(dataToSend)
      }).then( res => {
        res.json().then( data => {
          resolve(data)
        })
      })
    })
  }

  loadData(endpoint) {
    return new Promise((resolve, reject) => {
      fetch(this.root + endpoint, {
        method: 'GET',
        headers: this.getHeaders
      }).then( res => {
        res.json().then( data => {
          resolve(data)
        });
      });
    })
  }

  putData(endpoint, dataToSend) {
    return new Promise((resolve, reject) => {
      fetch(this.root + endpoint, {
        method: 'PUT',
        headers: this.putHeaders,
        body: dataToSend
      }).then( res => {
        res.json().then( data => {
          resolve(data)
        })
      })
    })
  }

}

export default Ajax;
