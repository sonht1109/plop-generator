import { AnyAction } from "redux";
import { AppState } from "shared/redux/types";
import * as consts from "./constants";
import { TAppState } from "./types";

const initState: TAppState = {};

const appReducer = (state = initState, action: AnyAction) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

export default appReducer;

export const appSelector = (state: AppState) => state.app;
