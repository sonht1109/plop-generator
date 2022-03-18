import rootReducer from "./root-reducer";
import store from "./store";

export type AppStore = ReturnType<typeof store>
export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']