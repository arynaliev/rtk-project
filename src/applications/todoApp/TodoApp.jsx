import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  completeTodo,
  deleteTodo,
} from "../../redux/slices/todoAppSlice";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "../../components/TodoItem";

const TodoApp = () => {
  const { todoList } = useSelector((state) => state.todoList);
  const [newTodo, setNewTodo] = useState({
    item: "",
    id: "",
    isCompleted: false,
  });
  const dispatch = useDispatch();

  function handleChange(e) {
    if (e.target.value) {
      const todo = {
        item: e.target.value,
        id: uuidv4(),
        isCompleted: false,
      };
      setNewTodo(todo);
    }
  }

  function handleAdd() {
    dispatch(addTodo(newTodo));
  }

  function handleComplete() {
    dispatch(completeTodo());
  }

  function handleDelete() {
    dispatch(deleteTodo());
  }

  return (
    <Container sx={{ width: "100%" }}>
      <Typography variant="h3">Todo App</Typography>
      <Box>
        <TextField
          value={newTodo.item}
          variant="standard"
          label="enter plan to do"
          onChange={handleChange}
        />
        <Button variant="contained" onClick={handleAdd}>
          Add
        </Button>
      </Box>
      <Box>
        {todoList.map((el, index) => (
          <TodoItem
            key={index}
            todo={el.item}
            id={el.id}
            isCompleted={el.isCompleted}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        ))}
      </Box>
    </Container>
  );
};

export default TodoApp;
