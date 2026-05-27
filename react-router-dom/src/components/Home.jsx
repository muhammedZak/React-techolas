import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/products');
  };

  return (
    <div>
      <h1>Home</h1>

      <button onClick={handleNavigate}>Go to product page</button>
    </div>
  );
};

export default Home;
