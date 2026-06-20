import './App.css';
import { useState, useEffect } from 'react';
import api from './api/axios';

function App() {
  const [datas, setDatas] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
  });

  const [editId, setEditId] = useState(null);

  const fetchData = async () => {
    const res = await api.get('/students');
    const data = await res.data;
    setDatas(res.data);
  };

  useEffect(() => {
    fetchData();
  }, [datas]);

  const deleteData = async (id) => {
    try {
      const is_confirm = window.confirm('Are you sure to delete this data?');
      if (is_confirm) {
        await api.delete(`/students/${id}`);
        // fetchData();
      }
    } catch (err) {
      console.log('error : ', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await api.put(`/students/${editId}`, formData);
      setEditId(null);
      setFormData({
        name: '',
        email: '',
        course: '',
      });
      alert('data updated successfully');
      // fetchData();
    } else {
      const res = api.post('/students', formData);
      setFormData({
        name: '',
        email: '',
        course: '',
      });

      alert('New student created successfully');
      // fetchData();
    }
  };

  const editData = (student) => {
    setFormData({
      name: student.name,
      email: student.email,
      course: student.course,
    });

    setEditId(student.id);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* name  */}
        <label htmlFor=''>Name</label>
        <input
          type='text'
          placeholder='Enter your name'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />

        {/* email  */}
        <label htmlFor=''>Email</label>
        <input
          type='email'
          placeholder='Enter your email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />

        {/* couse  */}
        <label htmlFor=''>Course</label>
        <input
          type='text'
          placeholder='Enter your course'
          name='course'
          value={formData.course}
          onChange={handleChange}
        />
        <br />
        <br />

        <button type='submit'>{editId ? 'update' : 'create'}</button>
        <hr />
      </form>
      <ul>
        {datas.map((itm) => (
          <li key={itm.id}>
            <p>{itm.id}</p>
            <p>{itm.name}</p>
            <p>{itm.email}</p>
            <p>{itm.course}</p>
            <button onClick={() => deleteData(itm.id)}>Delete</button>
            <button onClick={() => editData(itm)}>Edit</button>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
