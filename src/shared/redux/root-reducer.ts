import appReducer from "containers/App/store";
import { combineReducers } from "redux";
import newContainerReducer from 'containers/NewContainer/store/reducer'
import aboutReducer from 'containers/About/store/reducer'
// [IMPORT NEW REDUCERS]

const rootReducer = combineReducers({
  app: appReducer,
  newContainer: newContainerReducer,
  about: aboutReducer,
  // [COMBINE NEW REDUCERS]
});

export default rootReducer;
