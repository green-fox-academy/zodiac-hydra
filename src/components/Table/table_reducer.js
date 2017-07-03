export const tableReducer = (state={
  gameData:{
    players: [],
    cards_on_table: []
  }
} , action) => {
  switch (action.type) {
    case 'GAME_LOADED':
      return Object.assign({}, state, { gameData: action.gameData });
    default:
      return state;
  }
};

export default tableReducer;
