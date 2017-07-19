/**
 * Created by cw on 2017-07-14.
 */

export default () => {
  let url = window.location.href;
  if (url.search('production') > 0) {
    window.sessionStorage.backend = 'https://msspoker.herokuapp.com'
  } else if (url.search('mock') > 0) {
    window.sessionStorage.backend = 'https://equal-koala.glitch.me'
  } else if (url.search('gabor') > 0) {
    window.sessionStorage.backend = 'http://10.27.6.212:8080'
  }
}
