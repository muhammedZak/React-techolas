import React, { useState } from 'react';
import Button from './UI/Button';

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    addTodo(text);
    setText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type='text'
          name='todo'
          id='todo-item'
        />
        <Button btnText='➕ Add' />
      </form>
    </div>
  );
};

export default TodoForm;
