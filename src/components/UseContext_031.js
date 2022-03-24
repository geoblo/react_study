import { useContext } from 'react';
import Personcontext from './contexts/PersonContext';

export default function UseContext_031() {
  const persons = useContext(Personcontext);

  return (
    <ul>
      {persons.map(person => (
        <li>{person.name}</li>
      ))}
    </ul>
  );
}
