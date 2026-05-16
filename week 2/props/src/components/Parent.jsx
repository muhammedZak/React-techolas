import React from 'react';
import Child from './Child';

const Parent = () => {
  const userName = 'Zaak';
  const age = 32;

  return (
    <div>
      <h2>Parent component</h2>
      <hr />
      <Child name={userName} age={age} />
    </div>
  );
};

export default Parent;
