import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navitems = ['Home', 'About', 'Contact'];
const Navbar = () => {
  const listItems = {
    textDecoration: 'none',
    color: 'white',
  };

  return (
    // Link
    // <div
    //   style={{
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //     background: 'green',
    //     padding: '10px',
    //   }}>
    //   <p>Logo</p>
    //   <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
    //     {navitems.map((item) => (
    //       <Link
    //         style={listItems}
    //         to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
    //         key={item}>
    //         {item}
    //       </Link>
    //     ))}
    //   </ul>
    // </div>
    // Navlink
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '20px',
          backgroundColor: 'green',
        }}>
        <p style={{ color: 'white' }}>Logo</p>
        <ul
          style={{
            display: 'flex',
            gap: '40px',
            listStyle: 'none',
            color: 'white',
          }}>
          <li>
            <NavLink
              to='/'
              style={({ isActive }) =>
                isActive
                  ? { color: 'yellow', textDecoration: 'underline' }
                  : listItems
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              style={({ isActive }) =>
                isActive
                  ? { color: 'yellow', textDecoration: 'underline' }
                  : listItems
              }>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/products'
              style={({ isActive }) =>
                isActive
                  ? { color: 'yellow', textDecoration: 'underline' }
                  : listItems
              }>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              style={({ isActive }) =>
                isActive
                  ? { color: 'yellow', textDecoration: 'underline' }
                  : listItems
              }>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
