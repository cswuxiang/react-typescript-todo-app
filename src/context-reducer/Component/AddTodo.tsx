import React, { useState, ChangeEvent, FormEvent } from "react";
import { useStore } from "../Store";


export const AddTodoForm: React.FC<any> = ({ addTodo }) => {
  const [, dispatch] = useStore();
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ data: { text: newTodo, complete:false},type:'ADD'})
   
  };

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};
