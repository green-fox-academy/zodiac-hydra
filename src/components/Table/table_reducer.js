export const tableReducer = (state={gameData:{}} , action) => {
  switch (action.type) {
    case 'GAME_LOADED':
      return {
        gameData: action.gameData
      };
    default:
      return state;
  }
};

export default tableReducer;
