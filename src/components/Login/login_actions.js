/**
 * Created by cw on 2017-06-30.
 */
import Ajax from '../Ajax';
//import axios from 'axios';
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
     console.log('loginData', res);
     dispatch(loginUser(res))
     });
    /*axios.post('https://equal-koala.glitch.me/leaderboard', loginInput)
      .then(function (res) {
        console.log('axios',res);
        dispatch(loginUser(res.data))
      })*/
  }
};

export default fetchLogin