import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { ThemeContext } from '../context/ThemeContext';

const Grandchild = () => {
  const { users, setUsers } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        backgroundColor: theme === 'dark' ? 'black' : 'white',
        color: theme === 'dark' ? 'white' : 'black',
        padding: '20px',
        marginTop: '20px',
      }}>
      <h2>Grandchild</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}

      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};

export default Grandchild;
