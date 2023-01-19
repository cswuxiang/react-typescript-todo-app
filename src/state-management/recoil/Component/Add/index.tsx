import React, {ChangeEvent, FormEvent } from "react";
import { useRecoilState } from "recoil";
import { ADD_TODO_ATOM, TODO_LIST_ATOM } from "../../State/initialTodos";

// import { AddTodo } from "../types";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<any> = ({ addTodo }) => {
  const [todo, setToDo] = useRecoilState(ADD_TODO_ATOM);
  const [todoList,setToDoList] = useRecoilState(TODO_LIST_ATOM);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setToDo({text:e.target.value,complete:false});
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setToDoList([...todoList, todo])
  };

  return (
    <form>
      <input type="text" value={todo.text} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};
