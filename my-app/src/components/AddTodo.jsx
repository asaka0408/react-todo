import { useState } from "react";

const AddTodo = ({setTodos}) => {
  const [task, setTask] = useState("");

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

  return(
    <form onSubmit={handleSubmit}>
        Add task:
        <input
          value={task}
          placeholder="Add New Task"
          onChange={handleNewTasks}
        />
        <button type="submit">Add</button>
      </form>
  )
}

export default AddTodo