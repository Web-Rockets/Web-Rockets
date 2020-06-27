
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => (
  <header>
    <div className="mainNav">
      <h1>WR</h1>
    </div>
    <nav className="mainNav">
      <ul>
        <li>
          <Link to={'Login'}>Authenticate</Link>
          </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;


