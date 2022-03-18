import { NewContainerReducer } from './types';
import * as consts from './constants';
import { AppState } from "shared/redux/types";
import { AnyAction } from "redux";

const initState: NewContainerReducer = {}

const newContainerReducer = (state = initState, action: AnyAction) => {
  switch (action.type) {
    default:
      return { ...state };
  }
}

export default newContainerReducer;
export const newContainerSelector = (state: AppState) => state.newContainer;