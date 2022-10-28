import React from "react";
import { useStore } from "../../Store";
// import { Todo, ToggleComplete } from "../types";
import { TodoListItem } from "../TodoItem";

interface TodoListProps {
  todos: Array<Todo>;
  toggleComplete: ToggleComplete;
}

export const TodoList: React.FC<any> = (props) => {

  const [todoList, dispatch] = useStore();
  debugger;


  return (
    <ul>
      {todoList.map((todo: { text: any; complete?: boolean; }) => (
        <TodoListItem
          key={todo.text}
          todo={todo}
          toggleComplete={()=>{
            debugger;
            dispatch({ data: todo, type:'TOGGLE'})
          }}
        />
      ))}
    </ul>
  );
};
