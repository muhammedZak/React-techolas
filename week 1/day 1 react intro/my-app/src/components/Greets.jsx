import { useState } from 'react';
import '../styles/Greets.css';

const Greets = () => {
  const [text, setText] = useState('Hello');
  return (
    <>
      <h1 className='txt'>Greeting component</h1>
      <h2>{text}</h2>
      <button onClick={() => setText(text === 'World' ? 'Hello' : 'World')}>
        Click me
      </button>
    </>
  );
};

export default Greets;
