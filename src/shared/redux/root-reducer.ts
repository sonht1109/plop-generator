import appReducer from "containers/App/store";
import { combineReducers } from "redux";
// [IMPORT NEW REDUCERS]

const rootReducer = combineReducers({
  app: appReducer,
  // [COMBINE NEW REDUCERS]
});

export default rootReducer;
