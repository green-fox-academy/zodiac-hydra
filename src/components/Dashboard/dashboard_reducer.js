/**
 * Created by cw on 2017-07-04.
 */
export const dashboardReducer = (state={userInfo:{}}, action) => {
  switch (action.type) {
    case 'USER_INFO_LOADED':
      return {
        userInfo: action.userInfo
      };
    default:
      return state
  }
};

export default dashboardReducer;