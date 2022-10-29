import React, { useState } from "react";

import { TodoList } from "./Component/List";
import { AddTodoForm } from "./Component/Add";
import { useStore } from "zustand";


const App: React.FC = () => {
  const getVotes = useStore((state: any) => state.data);

  const toggleComplete: ToggleComplete = selectedTodo => {
    const updatedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      <TodoList todos={todos} toggleComplete={toggleComplete} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;
