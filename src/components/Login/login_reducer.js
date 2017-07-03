/**
 * Created by cw on 2017-06-30.
 */
export const loginReducer = (state={theUser:{}}, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return {
        theUser: action.theUser
      };
    default:
      return state
  }
};

export default loginReducer;