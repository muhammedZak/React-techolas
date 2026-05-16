import React from 'react';

const GrandChild = ({ name }) => {
  return (
    <div>
      <h1>Grand Child Component</h1>
      <h3>Hello {name}</h3>
    </div>
  );
};

export default GrandChild;
