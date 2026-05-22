import React, { useEffect, useState } from 'react';

import './App.css';
import UserCard from './components/UserCard';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        );
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setUsers(data.slice(0, 6));
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (isLoading) {
    return (
      <div className='loading-container'>
        <div className='loader'></div>
        <p>Loading visionaries...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='error-container'>
        <p>⚠️ {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className='directory-container'>
      <div className='header'>
        <h1>✨ creative crew</h1>
        <div className='header-badge'>
          modern directory · fluid interactions
        </div>
        <p className='subhead'>elegant cards · seamless micro-interactions</p>
      </div>

      <ul className='users-grid'>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>

      <footer>
        <span>✦ professional UI · pure CSS animations ✦</span>
      </footer>
    </div>
  );
};

export default App;

// const App = () => {
//   const [users, setUsers] = useState([]);

//   // const [users, setUsers] = useState([]);

//   // useEffect(() => {
//   //   fetch('https://jsonplaceholder.typicode.com/users')
//   //     .then((res) => res.json())
//   //     .then((data) => setUsers(data))
//   //     .catch((err) => console.log(err));
//   // }, []);

//   // const names = ['Zakariya', 'Jishnu', 'Lakshmi'];
//   // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   // const evenNumbers = numbers.filter((num) => num % 2 === 0);

//   // const filterName = names.filter((name) => name.toUpperCase().includes('Z'));

//   // const users = [
//   //   { id: 1, name: 'Zak', age: 31 },
//   //   { id: 2, name: 'Ananymous', age: 28 },
//   //   { id: 3, name: 'Jishnu', age: 21 },
//   // ];

//   return (
//     <div>
//       <h1>List and Keys</h1>
//       {names.map((name, index) => (
//         <p key={index}>{name}</p>
//       ))}
//       <hr />
//       <div>
//         {evenNumbers.map((even, index) => (
//           <p key={index}>{even}</p>
//         ))}
//       </div>
//       <div>
//         {filterName.map((name, index) => (
//           <p key={index}>{name}</p>
//         ))}
//       </div>

//       {/*  */}
//       <div>
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>
//               <p>Name: {user.name}</p>
//               <p>Email: {user.email}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;
