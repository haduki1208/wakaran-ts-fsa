import { createStore, combineReducers } from "redux";
import { hogeReducer } from "./hoge/reducer";
import { fugaReducer } from "./fuga/reducer";
import { piyoReducer } from "./piyo/reducer";

const rootReducer = combineReducers({
  hoge: hogeReducer,
  fuga: fugaReducer,
  piyo: piyoReducer
});

export type Store = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
