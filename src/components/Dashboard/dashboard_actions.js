/**
 * Created by cw on 2017-07-04.
 */
import Ajax from '../Ajax';
let ajax = new Ajax();

export const loadUserInfo = (userInfo) => {
  return {
    type: 'USER_INFO_LOADED',
    userInfo
  }
};

const fetchUserInfo = () => {
  return (dispatch, getState) => {
    ajax.loadData('/user/' + window.sessionStorage.userID)
      .then(function (res) {
        dispatch(loadUserInfo(res))
      })
  }
};

export default fetchUserInfo;
