import React from 'react';
import { Link } from 'react-router-dom';

function Link_014() {
  return (
    <ul>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/router11">router11</Link>
      </li>
      <li>
        <Link to="/router11/person1">router11/person1</Link>
      </li>
      <li>
        <Link to="/router12">router12</Link>
      </li>
      <li>
        <Link to="/router12/test">router12/test</Link>
      </li>
    </ul>
  );
}

export default Link_014;
