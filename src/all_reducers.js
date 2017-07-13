import {combineReducers} from 'redux';
import leaderBoardReducer from './components/Leaderboard/leaderboard_reducer';
import TablesReducer from './components/Tables/tables_reducer';
import tableReducer from './components/Table/table_reducer';
import gameroomReducer from './components/Gameroom/gameroom_reducer';
import loginReducer from './components/Login/login_reducer';
import dashboardReducer from './components/Dashboard/dashboard_reducer';
import buyInReducers from './components/BuyIn/buyIn_reducer';

const allReducers = combineReducers({
  leaderBoard: leaderBoardReducer,
  tables: TablesReducer,
  login: loginReducer,
  table: tableReducer,
  gameroom: gameroomReducer,
  userInfo: dashboardReducer,
  buyIn: buyInReducers
});

// main export
export default allReducers;
