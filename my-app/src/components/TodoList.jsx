import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from '@mui/material/Checkbox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TodoList = ({ todos, setTodos }) => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

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
        <ListItemButton dense>
          <ListItemIcon>
            <Checkbox
              {...label}
              sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
              color="success"
              checked={todo.isCompleted}
              onChange={() => handleUpdateTask(todo.id)}
            />
          </ListItemIcon>
        <ListItemText
          key={todo.id}
          primary={todo.task}
          style={
            todo.isCompleted === true
              ? { textDecorationLine: "line-through" }
              : {}
          }/>
        <ListItemIcon>
          <DeleteForeverIcon
            sx={{ mr: 1 }}
            onClick={() => handleRemoveTask(todo.id)}
            style={{ cursor: "pointer" }}
          />
        </ListItemIcon>
      </ListItemButton>
      ))}
    </ul>
  );
};

export default TodoList;
