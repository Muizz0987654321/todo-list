import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../actions';

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  
  return (
    <li className={`flex justify-between items-center bg-gray-100 p-2 my-2 rounded shadow ${todo.completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
      {todo.text}
      <div>
        <button onClick={() => dispatch(toggleTodo(todo.id))}
          className="text-sm bg-green-500 hover:bg-green-600 text-white py-1 px-2 rounded mr-2">
          {todo.completed ? 'Undo' : 'Done'}
        </button>
        <button onClick={() => dispatch(deleteTodo(todo.id))}
          className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded">
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
