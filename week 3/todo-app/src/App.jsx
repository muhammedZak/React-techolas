import React, { useEffect, useState } from 'react';

import './App.css';

const App = () => {
  const [inputData, setInputData] = useState('');
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [],
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (inputData.trim() === '') {
      return;
    }

    const newTask = {
      id: Date.now(),
      task: inputData,
    };

    setTasks([...tasks, newTask]);
    setInputData('');
  }

  function deleteTask(id) {
    const data = tasks.filter((t) => t.id !== id);
    setTasks(data);
  }

  return (
    <div id='task-container'>
      <h1 className='header'>Todo App</h1>
      <hr />
      <div className='form-container'>
        <input
          type='text'
          name=''
          id=''
          placeholder='Create new task'
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={addTask}>Add task</button>
      </div>

      <h1 className='header'>Taks</h1>
      <hr />

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            {t.task} <button onClick={() => deleteTask(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
