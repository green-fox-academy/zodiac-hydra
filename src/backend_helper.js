/**
 * Created by cw on 2017-07-14.
 */

export default () => {
  let url = window.location.href;
  if (url.search('production') > 0) {
    window.sessionStorage.backend = 'https://msspoker.herokuapp.com'
  } else {
    window.sessionStorage.backend = 'https://equal-koala.glitch.me'
  }
}