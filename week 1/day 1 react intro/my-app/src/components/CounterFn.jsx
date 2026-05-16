import React, { useState } from 'react';

const CounterFn = () => {
  const [count, setCount] = useState(0);
  const [messsage, setMessage] = useState('');
  const [value, setValue] = useState('New message');

  // console.log(useState('zak'));

  return (
    <>
      <p>{messsage}</p>
      <h1>Counter {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setMessage('You clicked a button')}>
        Show message
      </button>
      <button onClick={() => alert(value)}>Value</button>
    </>
  );
};

export default CounterFn;
