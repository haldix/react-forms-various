import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <ul className='NavBar__list'>
        <li>
          <NavLink exact to='/' activeClassName='selected'>
            Form
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/clients' activeClassName='selected'>
            Clients List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
