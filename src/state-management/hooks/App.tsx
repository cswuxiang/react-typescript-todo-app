import React, { useState } from "react";
import { initialTodos } from "./State/initialTodos";
import { TodoList } from "./Component/List";
import { AddTodoForm } from "./Component/Add";


const App: React.FC = () => {
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

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
