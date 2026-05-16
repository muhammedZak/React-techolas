import React from 'react';
import Child from './Child';

const Parent = () => {
  const user = 'John';
  return (
    <div>
      <h1>Parent Component</h1>
      <hr />
      <Child name={user} />
    </div>
  );
};

export default Parent;
