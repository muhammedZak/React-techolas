import React, { useState } from 'react';

const Form = () => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <h1>FORM</h1>
      <p>{input}</p>
      <input
        onChange={(e) => handleChange(e)}
        type='text'
        name='name'
        id='uname'
      />
    </div>
  );
};

export default Form;
