export const GameroomReducer = (state={gameroom:{}} , action) => {
  switch (action.type) {
    case 'GAMEROOM_LOADED':
      return Object.assign({}, state, { gameroom: action.gameroom });
    default:
      return state;
  }
};

export default GameroomReducer;
