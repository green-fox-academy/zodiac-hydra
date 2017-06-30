import {combineReducers} from 'redux';
import leaderBoardReducer from './components/Leaderboard/leaderboard_reducer';
import tableReducer from './components/Table/table_reducer';

const allReducers = combineReducers({
  leaderBoard: leaderBoardReducer,
  table: tableReducer
});

export default allReducers;
