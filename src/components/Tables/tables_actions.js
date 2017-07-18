import axios from 'axios';

export const loadTables = (tables) => {
  return {
    type: 'TABLES_LOADED',
    tables
  }
};

export const fetchTables = () => {
  return (dispatch, getState) => {

    axios.get('https://equal-koala.glitch.me/games')
      .then(function(res) {
        console.log("all the tables", res);
      dispatch(loadTables(res.data.games));
    });
  };
};

export default fetchTables;
