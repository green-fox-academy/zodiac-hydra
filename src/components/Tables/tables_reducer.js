export const TablesReducer = (state={tables:[]} , action) => {
  switch (action.type) {
    case 'TABLES_LOADED':
      return {
        tables: action.tables
      };
    default:
      return state;
  }
};

export default TablesReducer;
