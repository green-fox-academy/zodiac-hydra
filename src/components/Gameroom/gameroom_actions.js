import axios from 'axios';

const root = 'https://equal-koala.glitch.me'

export const loadGameroom = (gameroom) => {
  return {
    type: 'GAMEROOM_LOADED',
    gameroom
  }
};

export const fetchGameroom = (id) => {
  return (dispatch, getState) => {
    let url = '/games/' + id;
    axios.get(root + url)
      .then(function(res) {
        console.log("gameroom data", res);
      dispatch(loadGameroom(res.data));
    });
  };
};

export default fetchGameroom;
