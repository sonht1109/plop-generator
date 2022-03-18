import { AboutReducer } from './types';
import * as consts from './constants';
import { AppState } from "shared/redux/types";
import { AnyAction } from "redux";

const initState: AboutReducer = {}

const aboutReducer = (state = initState, action: AnyAction) => {
  switch (action.type) {
    default:
      return { ...state };
  }
}

export default aboutReducer;
export const aboutSelector = (state: AppState) => state.about;