import { useState } from "react";

const TodoList = () => {
  const initialState = [
    {
      id: 1675144069125,
      task: "豚星",
      isCompleted: false,
    },
    {
      id: 1675144069126,
      task: "豚39",
      isCompleted: false,
    },
    {
      id: 1675144069127,
      task: "どん",
      isCompleted: false,
    },
  ];

  const [todos, setTodos] = useState(initialState);
  const [task, setTask] = useState("");

  console.log(todos)

  const handleNewTasks = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task === "") return;
    setTodos((todos) => [
      ...todos,
      { id: new Date().getTime(), task, isCompleted: false },
    ]);
    setTask("");
  };

  const handleUpdateTask = (id) => {
    const prevState = todos.map((todo)=>({...todo}));
    const newState = prevState.map((todo)=>{
      if(todo.id === id) {
        todo.isCompleted = !todo.isCompleted
      }
    return todo
    });
    setTodos(newState)
  };

  const handleRemoveTask = (id) => {
    const newState = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(newState)
  }

  return (
    <div>
      <h1>TodoList</h1>
      <form onSubmit={handleSubmit}>
        Add task:
        <input
          value={task}
          placeholder="Add New Task"
          onChange={handleNewTasks}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={todo.isCompleted === true ? {textDecorationLine: 'line-through'} : {}}
          >
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => handleUpdateTask(todo.id)}
             />
            {todo.task}
            <span
              onClick={() => handleRemoveTask(todo.id)}
              style={{cursor: 'pointer'}}
            >☓</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
