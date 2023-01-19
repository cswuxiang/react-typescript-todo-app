export function findItem(state: Array<any>, todo: any) {
  const updatedTodos = state.map(_todo => {
    if (_todo.text === todo.text) {
      return { ...todo, complete: !todo.complete };
    }
    return todo;
  });
}