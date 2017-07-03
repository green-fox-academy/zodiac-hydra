/**
 * Created by cw on 2017-06-30.
 */
import Ajax from '../Ajax';
let ajax = new Ajax();

export const loginUser = (theUser) => {
  return {
    type: 'USER_LOGGED_IN',
    theUser
  }
};

const fetchLogin = (loginInput) => {
  return (dispatch, getState) => {
    ajax.postData('/login', loginInput)
     .then(function (res) {
      if (res.result === 'success') {
        dispatch(loginUser(res));
        window.sessionStorage.userID = res.id;
        window.sessionStorage.accessToken = res.token;
        window.location.href = '/dashboard'
      } else {
        alert('LOGIN ERROR')
      }
     });
  }
};

export default fetchLogin