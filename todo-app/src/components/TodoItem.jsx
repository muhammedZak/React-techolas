import React from 'react';
import Button from './UI/Button';

const TodoItem = ({ todo }) => {
  return (
    <li>
      <span>{todo.text}</span>
      <Button btnText='📏 Edit' />
      <Button btnText='✂️ Delete' />
    </li>
  );
};

export default TodoItem;
