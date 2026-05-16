import React, { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  const names = ['Zakariya', 'Jishnu', 'Lakshmi'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = numbers.filter((num) => num % 2 === 0);

  const filterName = names.filter((name) => name.toUpperCase().includes('Z'));

  // const users = [
  //   { id: 1, name: 'Zak', age: 31 },
  //   { id: 2, name: 'Ananymous', age: 28 },
  //   { id: 3, name: 'Jishnu', age: 21 },
  // ];

  return (
    <div>
      <h1>List and Keys</h1>
      {names.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
      <hr />
      <div>
        {evenNumbers.map((even, index) => (
          <p key={index}>{even}</p>
        ))}
      </div>
      <div>
        {filterName.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>

      {/*  */}
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
