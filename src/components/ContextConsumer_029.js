import Personcontext from './contexts/PersonContext';

export default function ContextConsumer_029() {
  return (
    <Personcontext.Consumer>
      {persons => (
        <ul>
          {persons.map(person => (
            <li>{person.name}</li>
          ))}
        </ul>
      )}
    </Personcontext.Consumer>
  );
}
