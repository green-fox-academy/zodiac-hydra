import {combineReducers} from 'redux';
import leaderBoardReducer from './components/Leaderboard/leaderboard_reducer';
import TablesReducer from './components/Tables/tables_reducer';
import tableReducer from './components/Table/table_reducer';

const allReducers = combineReducers({
  leaderBoard: leaderBoardReducer,
  tables: TablesReducer,
  table: tableReducer
});

export default allReducers;
