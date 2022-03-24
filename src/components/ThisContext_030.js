import React, { Component } from 'react';
import Personcontext from './contexts/PersonContext';

class Thiscontext030 extends Component {
  /*   
  constextType은 여러개를 지정 할 수 없다
  persons말고 다른 context에서 데이터를 동시에 가져다 쓰고 싶다면
  컴포넌트를 하나 더 만들어서 context를 만들고 props를 이용해 넘겨줘야 한다. 
  ->결론: 불편
  */
  static contextType = Personcontext;
  render() {
    const persons = this.context;
    return (
      <ul>
        {persons.map(person => (
          <li>{person.name}</li>
        ))}
      </ul>
    );
  }
}

export default Thiscontext030;

// function 에서도 사용 할 수 있다
Thiscontext030.contextType = Personcontext;
