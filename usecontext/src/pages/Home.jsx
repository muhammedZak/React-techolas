import React from 'react';
import Parent from '../components/Parent';
import Child from '../components/Child';
import Grandchild from '../components/Grandchild';

const Home = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Home page</h1>
      <Parent />
      <hr />
      <Child />
      <hr />
      <Grandchild />
    </div>
  );
};

export default Home;
