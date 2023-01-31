import { useState } from "react";

const TodoList = ({ todos, setTodos }) => {
  const handleUpdateTask = (id) => {
    const prevState = todos.map((todo) => ({ ...todo }));
    const newState = prevState.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });
    setTodos(newState);
  };

  const handleRemoveTask = (id) => {
    const newState = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newState);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={
            todo.isCompleted === true
              ? { textDecorationLine: "line-through" }
              : {}
          }
        >
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => handleUpdateTask(todo.id)}
          />
          {todo.task}
          <span
            onClick={() => handleRemoveTask(todo.id)}
            style={{ cursor: "pointer" }}
          >
            ☓
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
