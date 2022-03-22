import { useState, useEffect } from 'react';

export default function Hooks023() {
  // [바뀌는 값, state를 바꾸는 함수]
  const [count, setCount] = useState(0);

  //(function:항상 렌더가 된 후에 실행, array:빈 배열시 최초만 실행, 배열안의 값이 변할 때 실행)
  // componentDidMount 상태일 때 실행
  useEffect(() => {
    console.log('componentDidMount');

    return () => {
      // 실행되기 직전에 코드 실행
      //clean up
      //componentWillUnmount
    };
  }, []);

  // componentDidMount & componentDidUpdate 상태일 때 둘다 실행
  useEffect(() => {
    console.log('componentDidMount & componentDidUpdate by count', count);
    return () => {
      console.log('clean up by count', count);
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={click}>Click me</button>
    </div>
  );

  function click() {
    //state를 의존적으로 처리하지 않음
    setCount(count + 1);
  }
}
