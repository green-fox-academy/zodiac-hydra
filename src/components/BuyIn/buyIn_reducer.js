/**
 * Created by cw on 2017-07-04.
 */
export const buyInReducer = (state={buyInChips:''}, action) => {
  switch (action.type) {
    case 'BUY_IN_CHIPS_ENTERED':
      return {
        buyInChips: action.buyInChips
      };
    default:
      return state;
  }
};

export default buyInReducer;