import {combineReducers} from 'redux';
import leaderBoardReducer from './components/Leaderboard/leaderboard_reducer';
import loginReducer from './components/Login/login_reducer';


const allReducers = combineReducers({
  leaderBoard: leaderBoardReducer,
  login: loginReducer
});

export default allReducers;
