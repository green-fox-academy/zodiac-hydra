import axios from 'axios';

export const loadTable = (gameData) => {
  return {
    type: 'GAME_LOADED',
    gameData
  }
};

export const fetchTable = () => {
  return (dispatch, getState) => {

    axios.get('https://equal-koala.glitch.me/game/6')
      .then(function (res) {
        console.log("Game data: ",res);
      dispatch(loadTable(res.data));
    });
  };
};

export default fetchTable
