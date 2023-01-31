import { useState } from "react";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Grid from "@mui/material/Grid";

const AddTodo = ({ setTodos }) => {
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

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        alignItems="center"
        justifyContent={"space-evenly"}
      >
        <Grid>
          <TextField
            value={task}
            placeholder="Add New Task"
            color="success"
            sx={{width: "40ch"}}
            onChange={handleNewTasks}
            />
        </Grid>
        <Grid>
          <Fab
            type="submit"
            variant="extended"
            size="medium"
            color="success"
            aria-label="add"
          >
            <AddTaskIcon sx={{ mr: 1 }} />
            Add
          </Fab>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddTodo;
