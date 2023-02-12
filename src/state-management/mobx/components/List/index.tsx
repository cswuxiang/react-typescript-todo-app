import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { TodoItem } from '../Item';

@observer
class TodoList extends Component<{
  store
  : any
}, {}> {
  inputRef: HTMLInputElement | any = null;
  render() {
    const { store }: any = this.props;
    debugger;
    return (
      <div>
        <ul>
          {store.todos.map((todo: any, index: any) => (
            <TodoItem
              key={index}
              todo={todo}
              onDelete={() => store.todos.splice(index, 1)}
            />
          ))}
        </ul>
        <div>
          <input ref={ref => this.inputRef = ref} />
          <button onClick={() => store.add(this.inputRef.value)}>
            Add New Todo
          </button>
        </div>
        <p>Completed: {store.completedCount}</p>
      </div>
    );
  }
}




export default TodoList;
