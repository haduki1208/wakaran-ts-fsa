import actionCreatorFactory from "typescript-fsa";

const actionCreator = actionCreatorFactory();

export const hogeActions = {
  changeFoo: actionCreator<void>("CHANGE_FOO"),
  changeBar: actionCreator<void>("CHANGE_BAR"),
  changeBaz: actionCreator<void>("CHANGE_BAZ"),
  changeAny: actionCreator<string>("CHANGE_ANY")
} as const;
