import axios from 'axios';

export const loadLeaderBoard = (users) => {
  return {
    type: 'LEADER_BOARD_LOADED',
    users
  }
};

export const fetchLeaderBoard = () => {
  return (dispatch, getState) => {

    axios.get('https://equal-koala.glitch.me/leaderboard')
      .then(function (res) {
        console.log("leaderdata",res);
      dispatch(loadLeaderBoard(res.data));
    });
  };
};

export default fetchLeaderBoard
