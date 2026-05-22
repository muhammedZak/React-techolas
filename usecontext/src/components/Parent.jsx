import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Parent = () => {
  const { users, setUsers } = useContext(UserContext);
  return (
    <div>
      <h2>Parent</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
      <button>Change username</button>
    </div>
  );
};

export default Parent;
