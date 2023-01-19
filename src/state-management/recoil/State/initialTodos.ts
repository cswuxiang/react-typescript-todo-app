import { atom, atomFamily,  } from "recoil";



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


const TODO_LIST = [{
  text: "Walk the dog",
  complete: true
},
{
  text: "Make app",
  complete: false
}];

export const TODO_LIST_ATOM_Famliy = atomFamily({
  key: 'todo_list',
  default: (userId:any)=>{
    if (userId>1){
      return TODO_LIST
    }else{
      return [{
        text: "Walk the dog",
        complete: true
      }]
    }
   
  }
});


export const ADD_TODO_ATOM = atom({
  key: 'ADD_TODO',
  default: {text:"",complete:false},
  effects_UNSTABLE: [
    ({ onSet }) => {//调用重新设置值时 使用
    
      onSet(newValue => {
      console.debug("Current user ID:", newValue);
    });
  },]
});

