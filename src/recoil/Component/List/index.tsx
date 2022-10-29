import React from "react";
import { useRecoilState, } from "recoil";
import { TODO_LIST_ATOM } from "../../State/initialTodos";
// import { Todo, ToggleComplete } from "../types";
import { TodoListItem } from "../Item";



export const TodoList: React.FC<any> = (props:any) => {
  const [todos] = useRecoilState(TODO_LIST_ATOM);

  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={()=>{
            // setFirstName("change name")
          }}
        />
      ))}
    </ul>
  );
};
