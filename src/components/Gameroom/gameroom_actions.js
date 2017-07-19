import axios from 'axios';

const root = window.sessionStorage.backend;

export const loadGameroom = (gameroom) => {
  return {
    type: 'GAMEROOM_LOADED',
    gameroom
  }
};

export const fetchGameroom = (id) => {
  return (dispatch, getState) => {
    let game_id = id;
    if (game_id === undefined) {
      game_id = 1;
    }
    let url = '/game/' + game_id;
    axios.get(root + url)
      .then(function(res) {
        console.log("gameroom data", res);
      dispatch(loadGameroom(res.data));
    });
  };
};

export default fetchGameroom;
