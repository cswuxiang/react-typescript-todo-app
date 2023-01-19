



export const initialState = [{
  text: "Walk the dog",
  complete: true
},
  {
    text: "Make app",
    complete: false
  }
]
// 更新操作
export const TOGGLE = 'TOGGLE';

export const ADD = 'ADD';

export const reducer = (state = initialState, action: any) => {
  if (action.type === TOGGLE) {
    const updatedTodos = state.map(todo => {
      if (todo.text === action.data.text) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    return updatedTodos
  }

  if (action.type === ADD) {
    return [...state,action.data];
  }
};
