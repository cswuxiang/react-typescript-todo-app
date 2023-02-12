
/**
 * mbox版本需要再4.4内
 */

import React from "react";
import TodoList from "./components/List";
import TodoStore from "./Store/index";

const styles = {
  fontFamily: "sans-serif"
};

const App = () => (
  <div style={styles}>
    <TodoList store={new TodoStore()} />
  </div>
);

export default App;
