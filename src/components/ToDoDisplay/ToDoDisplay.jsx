import React, { useState, useEffect } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import Todo from "../ToDo/ToDo";
import ToDoTest from "../ToDo/ToDoTest";

const ToDoDisplay = (props) => {
  // State to hold the ToDO items
  const [todos, setToDos] = useState([]);

  // CRUD functions for Todo-list

  // addToDo function
  const addToDo = (todo) => {
    //    regex to account for spaces and characters
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    //   state for new ToDo item
    const newToDos = [todo, ...todos];

    // update the state and remove item from input
    setToDos(newToDos);
  };

  //  editTodo function
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    // updating the state
    setToDos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  // remove Todo function

  const removeTodo = (id) => {
    // removing the id of the element.
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    // update the state
    setToDos(removeArr);
  };

  // Complete ToDos function
  const completeTodo = (id) => {
    // define updatedTodo
    let updatedTodo = todos.map((todo) => {
      //  Toggling the Todos from true to false
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    // Updating the state variable with updatedTodo
    setToDos(updatedTodo);
  };

  return (
    <div>
      <h1>What needs to be accomplished Today? </h1>
      <ToDoForm onSubmit={addToDo} />
      {/* WORK IN PROGRESS */}
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default ToDoDisplay;
