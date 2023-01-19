import React from "react";
import { AddTodoForm } from "./Component/Add";
import { TodoList } from "./Component/List";
import { useStore } from "./State";



const App: React.FC = () => {
  debugger;
  const toDoList = useStore((state: any) => state.todos);
  const addTodo = useStore((state: any) => state.addTodo);
  const toggleComplete = useStore((state: any) => state.toggleComplete);

  return (
    <React.Fragment>
      <TodoList todos={toDoList} toggleComplete={toggleComplete} />
      <AddTodoForm addTodo={addTodo} />
    </React.Fragment>
  );
};

export default App;
