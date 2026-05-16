import React, { useState } from 'react';
import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

const Home = () => {
  const [todos, setTodos] = useState([]);

  console.log(todos);

  const addTodo = (value) => {
    const todo = {
      id: Date.now(),
      text: value,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([...todos, todo]);
  };

  return (
    <>
      <Header />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </>
  );
};

export default Home;
