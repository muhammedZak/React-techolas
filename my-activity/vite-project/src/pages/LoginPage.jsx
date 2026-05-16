import React from 'react';
import Login from '../features/Login';

const LoginPage = () => {
  const handleLoginAlert = () => {
    alert('Login successfull');
  };

  return (
    <div>
      <Login handleLoginAlert={handleLoginAlert} />
    </div>
  );
};

export default LoginPage;