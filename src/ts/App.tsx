import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Store, hogeActions } from "./redux";

const App: React.FC<{}> = (): JSX.Element => {
  const { hoge, fuga, piyo } = useSelector((state: Store) => {
    return {
      hoge: state.hoge,
      fuga: state.fuga,
      piyo: state.piyo
    };
  });
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const clickFoo = (): void => {
    dispatch(hogeActions.changeFoo());
  };
  const clickBar = (): void => {
    dispatch(hogeActions.changeBar());
  };
  const clickBaz = (): void => {
    dispatch(hogeActions.changeBaz());
  };
  const clickAny = (): void => {
    if (!inputRef.current) return;
    dispatch(hogeActions.changeAny(inputRef.current.value));
  };

  return (
    <dl>
      <dt>{hoge.text}</dt>
      <dt>{fuga.text}</dt>
      <dt>{piyo.text}</dt>
      <dd>
        any word:
        <input type="text" ref={inputRef} />
      </dd>
      <dd>
        <button onClick={clickFoo}>foo</button>
        <button onClick={clickBar}>bar</button>
        <button onClick={clickBaz}>baz</button>
        <button onClick={clickAny}>any</button>
      </dd>
    </dl>
  );
};

export default App;
