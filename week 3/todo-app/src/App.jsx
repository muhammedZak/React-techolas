import React, { useEffect, useState } from 'react';
import { useTheme } from './hooks/useTheme';

import './App.css';

const App = () => {
  const [inputData, setInputData] = useState('');
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [],
  );

  const { theme, toggleTheme } = useTheme();

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
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInputData('');
  }

  function deleteTask(id) {
    const data = tasks.filter((t) => t.id !== id);
    setTasks(data);
  }

  function toggleTaskComplete(id) {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            completed: !task.completed,
          }
        : task,
    );

    setTasks(updatedTasks);
  }

  return (
    <>
      <div className='app-wrapper'>
        <div className='app-header'>
          <button
            className='theme-toggle'
            onClick={toggleTheme}
            aria-label='Toggle theme'>
            <span className='toggle-icon'>
              {theme === 'light' ? '🌙' : '☀️'}
            </span>

            <span className='toggle-text'>
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </span>
          </button>
        </div>

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
              <li key={t.id} className={t.completed ? 'completed' : ''}>
                <div className='task-content'>
                  <input
                    type='checkbox'
                    checked={t.completed}
                    onChange={() => toggleTaskComplete(t.id)}
                  />

                  <span>{t.task}</span>
                </div>

                <button onClick={() => deleteTask(t.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
