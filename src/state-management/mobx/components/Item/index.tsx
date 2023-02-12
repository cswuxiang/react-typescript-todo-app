import { observer } from "mobx-react";
import React, { Component } from "react";
@observer
export class TodoItem extends Component<{
  todo: any,
  onDelete: any
}, {}> {
  toggleTodo = () => {
    const { todo }: any = this.props;
    todo.completed = !todo.completed;
  }

  render() {
    const { todo, onDelete }: any = this.props;
    return (
      <li onClick={this.toggleTodo}>
        {todo.task}
        {todo.completed && <span>&nbsp;&nbsp;&nbsp;&#10004;</span>}
        <small onClick={onDelete}> &#10005;</small>
      </li>
    );
  }
}
