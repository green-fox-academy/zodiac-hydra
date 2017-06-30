export const leaderBoardReducer = (state={users:[]} , action) => {
  switch (action.type) {
    case 'LEADER_BOARD_LOADED':
      return {
        users: action.users
      };
    default:
      return state;
  }
};

export default leaderBoardReducer;
