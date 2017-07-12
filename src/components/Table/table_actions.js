import axios from 'axios';

const root = 'https://equal-koala.glitch.me';

export const loadTable = (gameData) => {
  return {
    type: 'GAME_LOADED',
    gameData
  }
};

export const fetchTable = (id) => {
  return (dispatch, getState) => {
    let url = '/game/' + id;
    axios.get(root + url)
      .then(function (res) {
        console.log("Game data: ",res);
      dispatch(loadTable(res.data));
    })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
    );
  };
};

export const loadHand = (handData) => {
  return {
    type: 'HAND_LOADED',
    handData
  }
};

export const fetchHand = (id) => {
  return (dispatch, getState) => {
    let url = '/game/' + id + '/hand'
    axios.get(root + url)
      .then(function (res) {
        console.log("Hand data: ",res);
      dispatch(loadHand(res.data));
    })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
    );
  };
};

export const loadShowdown = (showdownData) => {
  return {
    type: 'SHOWDOWN_LOADED',
    showdownData
  }
};

export const fetchShowdown = (id) => {
  return (dispatch, getState) => {
    let url = '/game/' + id + '/showdown';
    axios.get(root + url)
      .then(function (res) {
        console.log("Showdown data: ",res);
      dispatch(loadShowdown(res.data));
    })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      }
    );
  };
};

export default {fetchTable, fetchHand, fetchShowdown};
