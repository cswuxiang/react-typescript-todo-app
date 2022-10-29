import React, {  } from "react";

import { TodoList } from "./Component/List";
import { AddTodoForm } from "./Component/Add";
import { RecoilRoot } from "recoil";
// import { AddTodoForm } from "./Component/Add/Index";


const App: React.FC = () => {
  


  return (
    <RecoilRoot>
      <TodoList  />
      <AddTodoForm />
    </RecoilRoot>
  );
};

export default App;
