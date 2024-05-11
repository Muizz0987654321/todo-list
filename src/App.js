import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

function App() {
  return (
    <div className="container mx-auto mt-5 p-4 shadow-lg rounded bg-white">
      <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
