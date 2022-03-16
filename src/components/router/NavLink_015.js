import React from 'react';
import { NavLink } from 'react-router-dom';

function NavLink_015() {
  return (
    <ul>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
          // className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}
        >
          home
        </NavLink>
      </li>
      <li>
        <NavLink to="/router11" style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>
          router11
        </NavLink>
      </li>
      <li>
        <NavLink to="/router11/person1" style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>
          router11/person1
        </NavLink>
      </li>
      <li>
        <NavLink to="/router12" style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>
          router12
        </NavLink>
      </li>
      <li>
        <NavLink to="/router12?name=mark" style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}>
          /router12?name=mark
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLink_015;
