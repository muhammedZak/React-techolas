import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from '../slice/usersSlice';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('User created');
    dispatch(setUsers(formData));
    setTimeout(() => {
      navigate('/users');
    }, 2000);
  };

  return (
    <div>
      <h1>Create user</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>Name: </label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={(e) => handleChange(e)}
          placeholder='Enter your name'
        />
        <br />
        <br />
        <label htmlFor=''>Email: </label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={(e) => handleChange(e)}
          placeholder='Enter your email'
        />
        <br />
        <br />
        <label htmlFor=''>City: </label>
        <input
          type='text'
          name='city'
          value={formData.city}
          onChange={(e) => handleChange(e)}
          placeholder='Enter your city'
        />
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Home;
