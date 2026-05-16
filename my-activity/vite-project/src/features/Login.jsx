import React from 'react';
import Button from '../components/Button';

const Login = ({ handleLoginAlert }) => {
  return (
    <div>
      <h1>Login</h1>
      <form action=''>
        <input type='text' name='' id='userName' />
        <br />
        <br />
        <input type='email' name='' id='email' />
        <br />
        <br />
        <Button
          onclick={handleLoginAlert}
          buttonText='Login Button'
          bgColor='blue'
          textColor='white'
        />
      </form>
    </div>
  );
};

export default Login;
