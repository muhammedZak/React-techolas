import { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  console.log(errors);

  function handleChange(event) {
    const { name, value } = event;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newErros = {};

    // username validation
    if (!formData.username.trim()) newErros.username = 'Username is required';

    if (!formData.email.trim()) newErros.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErros.email = 'Invalid email';
    }

    if (!formData.password.trim()) {
      newErros.password = 'Password is required';
    } else if (
      !/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{6,}$/.test(
        formData.password,
      )
    ) {
      newErros.password = `at least one letter, 
       at least one uppercase letter,
       atlease one specific charenctors, 
       atleast one number, 
       minimux password length is 6`;
    }

    if (Object.keys(newErros) === 0) {
      alert();
    }
  }

  return (
    <div className='form-container'>
      {/* FORM VALIDATION */}
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <label htmlFor=''>Username</label>
        <input
          type='text'
          name='username'
          id=''
          placeholder='Enter username'
          value={formData.username}
          onChange={(e) => handleChange(e.target)}
        />
        <p style={{ color: 'red' }}>{errors.username}</p>
        {/* Email */}
        <label htmlFor=''>Email</label>
        <input
          type='email'
          name='email'
          id=''
          placeholder='Enter email here'
          value={formData.email}
          onChange={(e) => handleChange(e.target)}
        />
        <p style={{ color: 'red' }}>{errors.email}</p>
        {/* password */}
        <label htmlFor=''>Password</label>
        <input
          type='password'
          name='password'
          id=''
          placeholder='password'
          value={formData.password}
          onChange={(e) => handleChange(e.target)}
        />
        <p style={{ color: 'red' }}>{errors.password}</p>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default App;
