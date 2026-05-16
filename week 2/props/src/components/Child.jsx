import React from 'react';

const Child = ({ name, age }) => {
  return (
    <div>
      <h3>Child component</h3>
      <h4>Name: {name}</h4>
      <h4>Age: {age}</h4>
    </div>
  );
};

export default Child;
