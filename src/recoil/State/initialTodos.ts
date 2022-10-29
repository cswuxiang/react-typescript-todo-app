import { atom,  } from "recoil";



export const TODO_LIST_ATOM = atom({
  key: 'todo_list',
  default: [{
    text: "Walk the dog",
    complete: true
  },
    {
      text: "Make app",
      complete: false
    }]
});


export const ADD_TODO_ATOM = atom({
  key: 'ADD_TODO',
  default: {text:"",complete:false}
});

