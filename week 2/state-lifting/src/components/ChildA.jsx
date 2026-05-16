import React, { useState } from 'react';

const ChildA = ({ value, setValue }) => {
  return (
    <div>
      <p>Child A state value :{value}</p>
      <button onClick={() => setValue('zak')}>Change value</button>
      <hr />
    </div>
  );
};

export default ChildA;
