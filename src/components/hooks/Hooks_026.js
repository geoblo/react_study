import { useState, useMemo, useCallback } from 'react';

function sum(persons) {
  console.log('sum...');
  return persons.map(person => person.age).reduce((l, r) => l + r, 0);
}

export default function Hooks026() {
  const [value, setValue] = useState('');
  const [persons] = useState([
    { name: 'Mark', age: 39 },
    { name: 'Hanna', age: 28 },
  ]);

  // useState 때문에 전부 재렌더링됨 하지만 이때 persons가 똑같으면 굳이 sum을 계속 실행할 필요가 없다.
  const count = sum(persons);
  // const count = useMemo(() => {
  //   return sum(persons);
  // }, [persons]);

  // 안에 있는 함수를 언제 새로 세팅해줄것인지..
  const click = useCallback(() => {
    console.log(value);
  }, []);

  return (
    <div>
      <input value={value} onChange={change} />
      <p>{count}</p>
      <button onClick={click}>click me</button>
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}
