import axios from 'axios';

const root = 'https://equal-koala.glitch.me';

export const loadTable = (gameData) => {
  return {
    type: 'GAME_LOADED',
    gameData
  }
};

export const fetchTable = () => {
  return (dispatch, getState) => {
    let url = '/game/6';
    axios.get(root + url)
      .then(function (res) {
        console.log("Game data: ",res);
      dispatch(loadTable(res.data));
    });
  };
};

export const loadHand = (handData) => {
  return {
    type: 'HAND_LOADED',
    handData
  }
};

export const fetchHand = () => {
  return (dispatch, getState) => {
    let url = '/game/6/hand'
    axios.get(root + url)
      .then(function (res) {
        console.log("Hand data: ",res);
      dispatch(loadHand(res.data));
    });
  };
};

export const loadShowdown = (showdownData) => {
  return {
    type: 'SHOWDOWN_LOADED',
    showdownData
  }
};

export const fetchShowdown = () => {
  return (dispatch, getState) => {
    let url = '/game/6/showdown';
    axios.get(root + url)
      .then(function (res) {
        console.log("Showdown data: ",res);
      dispatch(loadShowdown(res.data));
    });
  };
};

export default {fetchTable, fetchHand, fetchShowdown};
