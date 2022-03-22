import { useState } from 'react';

export default function Hooks021() {
  // [바뀌는 값, state를 바꾸는 함수]
  const [state, setState] = useState({ count: 0 });

  return (
    <div>
      <p>You clicked {state.count} times</p>
      <button onClick={this.click}>Click me</button>
    </div>
  );

  function click() {
    //state를 의존적으로 처리하지 않음
    setState(state => {
      return {
        count: state.count + 1,
      };
    });
  }
}
