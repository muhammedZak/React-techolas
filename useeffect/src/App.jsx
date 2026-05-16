import { useEffect, useState } from 'react';

import './App.css';

import React from 'react';

// const App = () => {
//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log('Timer running');
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//       console.log('cleanup done');
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Clean up function</h1>
//     </div>
//   );
// };

// export default App;

function App() {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState('Zak');

  useEffect(() => {
    console.log('run count increament/ decreament');
  }, [count]);

  return (
    <>
      <h1>useEffect Hook</h1>
      <h3>{userName}</h3>
      <h1>count {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>

      <button onClick={() => setUserName('ZAKARIYA')}>Change username</button>
    </>
  );
}

export default App;
