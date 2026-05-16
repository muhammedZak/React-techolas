import React from 'react';
import GrandChild from './GrandChild';

const Child = ({name}) => {
  return (
    <div>
      <h1>Child Component</h1>
      <hr />
      <GrandChild name={name}/>
    </div>
  );
};

export default Child;
