import * as React from "react";
import { useState } from "react";
import { TodoList, AddTodo } from "./index";
import { CssBaseline, Container } from "@mui/material";

const Todo = () => {
  // 初期todo
  const initialState = [
    {
      id: 1675144069125,
      task: "しゅくだい",
      isCompleted: false,
    },
    {
      id: 1675144069126,
      task: "ぎょうむ",
      isCompleted: false,
    },
    {
      id: 1675144069127,
      task: "かりきゅらむ",
      isCompleted: false,
    },
  ];

  const [todos, setTodos] = useState(initialState);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{
          textAlign: 'center'
        }}
      >
        <h1>ToDoList</h1>
        <AddTodo setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </Container>
    </React.Fragment>
    // <div>
    // </div>
  );
};

export default Todo;
