export const tableReducer = (state={
  gameData:{
    players: [],
    cards_on_table: []
  },
  handData:['cardsBack', 'cardsBack'],
  showdownData:{
    winner_user_id: 0,
    user_cards: [{
      user_id: 0,
      cards: ['cardsBack', 'cardsBack']
    }]
  }
} , action) => {
  switch (action.type) {
    case 'GAME_LOADED':
      return Object.assign({}, state, { gameData: action.gameData });
    case 'HAND_LOADED':
      return Object.assign({}, state, { handData: action.handData });
    case 'SHOWDOWN_LOADED':
      return Object.assign({}, state, { showdownData: action.showdownData });
    default:
      return state;
  }
};

export default tableReducer;
