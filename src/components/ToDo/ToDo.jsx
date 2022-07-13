import React, { useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";

const Todo = (props) => {
  // state to edit the ToDOs
  const [editToDo, setEditToDo] = useState({
    id: null,
    value: "",
  });
  return (
    // <div>
    //   <h1>Test value</h1>
    // </div>
    <h1>Neil</h1>
  );
};

export default Todo;
