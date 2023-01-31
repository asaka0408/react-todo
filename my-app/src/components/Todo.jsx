import { useState } from "react";
import {TodoList, AddTodo} from './index'

const Todo = () => {
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

  return(
    <div>
      <h1>ToDoList</h1>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
};

export default Todo
