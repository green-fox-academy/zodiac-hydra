import Ajax from '../Ajax';

let ajax = new Ajax();

export const loadTables = (tables) => {
  return {
    type: 'TABLES_LOADED',
    tables
  }
};

export const fetchTables = () => {
  return (dispatch, getState) => {
    ajax.loadData('/games')
      .then((res) => {
        dispatch(loadTables(res.games));
      });
  };
};

export default fetchTables;
