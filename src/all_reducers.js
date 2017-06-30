import {combineReducers} from 'redux';
import leaderBoardReducer from './components/Leaderboard/leaderboard_reducer';


const allReducers = combineReducers({
  leaderBoard: leaderBoardReducer
});

export default allReducers;
