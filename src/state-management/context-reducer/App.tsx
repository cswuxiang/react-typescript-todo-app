import React from "react";
import { AddTodoForm } from "./Component/AddTodo";
import { TodoList } from "./Component/TodoList";
import { StoreProvider } from "./Store";
import { initialState, reducer } from './Store/reducer';

const App: React.FC = () => {
  return (
    <StoreProvider initialState={initialState} reducer={reducer}>
      <TodoList  />
      <AddTodoForm  />
    </StoreProvider>
  );
};

export default App;
