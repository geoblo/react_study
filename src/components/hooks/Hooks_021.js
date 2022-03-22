import { useState } from 'react';

export default function Hooks021() {
  // [바뀌는 값, count를 바꾸는 함수]
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={this.click}>Click me</button>
    </div>
  );

  function click() {
    setCount(count + 1);
  }
}
