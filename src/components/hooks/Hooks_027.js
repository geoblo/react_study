import { createRef, useState, useRef } from 'react';

export default function Hooks027() {
  const [value, setValue] = useState('');
  //렌더 될때마다 새 레퍼런스를 만든다.
  const input1Ref = createRef();
  //렌더를 돌아도 유지. 같은 레퍼런스를 계속..
  const input2Ref = useRef();

  console.log(input1Ref.current, input2Ref.current);

  return (
    <div>
      <input value={value} onChange={change} />
      <input ref={input1Ref} />
      <input ref={input2Ref} />
    </div>
  );

  function change(e) {
    setValue(e.target.value);
  }
}
