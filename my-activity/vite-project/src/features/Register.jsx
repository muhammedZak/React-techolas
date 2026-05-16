import React from 'react';
import Button from '../components/Button';

const Register = ({ handleRegisterAlert }) => {
  return (
    <div>
      <h1>Register</h1>
      <form action=''>
        <input type='text' name='' id='userName' />
        <br />
        <br />
        <input type='email' name='' id='email' />
        <br />
        <br />
        <Button
          onclick={handleRegisterAlert}
          buttonText='Register Button'
          bgColor='green'
          textColor='white'
        />
      </form>
    </div>
  );
};

export default Register;
