import { reducerWithInitialState } from "typescript-fsa-reducers";
import { hogeActions } from "../hoge/actions";

type State = {
  text: string;
};

const initialState: State = {
  text: "foo"
};

export const fugaReducer = reducerWithInitialState(initialState)
  .case(
    hogeActions.changeFoo,
    (state: State): State => {
      return { ...state, text: "foo" };
    }
  )
  .case(
    hogeActions.changeBar,
    (state: State): State => {
      return { ...state, text: "bar" };
    }
  )
  .case(
    hogeActions.changeBaz,
    (state: State): State => {
      return { ...state, text: "baz" };
    }
  )
  .case(
    hogeActions.changeAny,
    (state: State, payload: string): State => {
      return {
        ...state,
        text: payload || "please input!"
      };
    }
  );
