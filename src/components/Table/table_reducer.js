export const tableReducer = (state={
  gameData:{
    players: [],
    cards_on_table: []
  },
  handData:['cardsBack', 'cardsBack']
} , action) => {
  switch (action.type) {
    case 'GAME_LOADED':
      return Object.assign({}, state, { gameData: action.gameData });
    case 'HAND_LOADED':
      return Object.assign({}, state, { handData: action.handData });
    default:
      return state;
  }
};

export default tableReducer;
