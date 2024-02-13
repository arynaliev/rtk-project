import { CheckBox, HighlightOffRounded } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

const TodoItem = ({ todo, id, isCompleted, handleDelete, handleComplete }) => {
  return (
    <Box
      sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
    >
      <CheckBox checked={isCompleted} onchange={handleComplete} />
      <Typography variant="p">{todo}</Typography>
      <IconButton onClick={handleDelete}>
        <HighlightOffRounded />
      </IconButton>
    </Box>
  );
};

export default TodoItem;
