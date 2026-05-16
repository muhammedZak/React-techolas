import React from 'react';
import Register from '../features/Register';

const RegisterPage = () => {
  const handleRegisterAlert = () => {
    alert('Register successfull');
  };

  return (
    <div>
      <Register handleRegisterAlert={handleRegisterAlert} />
    </div>
  );
};

export default RegisterPage;
