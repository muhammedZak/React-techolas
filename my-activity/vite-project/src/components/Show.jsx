import React, { useState } from 'react';

const Show = () => {
  const [show, setShow] = useState(false); // true

  return (
    <div>
      {show && <p>Welcome to React</p>}
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
    </div>
  );
};

export default Show;
