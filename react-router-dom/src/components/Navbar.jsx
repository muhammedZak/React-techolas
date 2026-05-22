import React from 'react';
import { Link } from 'react-router-dom';

const navitems = ['Home', 'About', 'Contact'];
const Navbar = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        background: 'green',
        padding: '10px',
      }}>
      <p>Logo</p>
      <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
        {navitems.map((item) => (
          <Link to={} key={item}>{item}</Link>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
