import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
            to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
            to='/users'>
            Users
          </Link>
        </li>
        <li>
          <Link
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
            to='/contact'>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
