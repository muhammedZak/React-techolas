import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Child = () => {
  const { users } = useContext(UserContext);
  return (
    <div>
      <h2>Child</h2>
      <p>user: {}</p>
    </div>
  );
};

export default Child;
