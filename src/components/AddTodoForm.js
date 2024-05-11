import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

function AddTodoForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add new todo"
        className="p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600">
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
