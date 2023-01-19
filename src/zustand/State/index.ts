import * as _ from 'lodash';
import { v4 as uuidv4 } from "uuid";
import create from "zustand";
export const todos: Array<Todo> = [
  {
    text: "Walk the dog",
    complete: true,
    key: uuidv4()
  },
  {
    text: "Make app",
    complete: false,
    key: uuidv4()
  }
];
const addTodo = (set: any) => (todo: any) => {
  set((state: any) => {
    let toDos = [...state.todos, {
      text: todo,
      complete: false,
      key: uuidv4()
    }];
    console.log('addTodo:', toDos)
    return {
      todos
        : toDos
    };
  })
}

const toggleComplete = (set: any) => (todo: any) => {

  //找到该条数据
  set((state: any) => {
    const tmp = _.find(state.todos, {
      key: todo
        .key
    })
    tmp.complete = !tmp.complete;
    return {
      todos: [...state.todos]
    };
  })

}

export const useStore = create((set) => ({
  todos: todos,
  addTodo: addTodo(set),
  toggleComplete: toggleComplete(set)

}));