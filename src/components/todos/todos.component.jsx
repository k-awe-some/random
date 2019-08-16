import React from "react";
import { addTodoAction } from "../../redux/todos/todo-actions";
import { store } from "../../redux/store";

class Todos extends React.Component {
  addItem = event => {
    event.preventDefault();
    const name = this.input.value;
    this.input.value = "";

    store.dispatch(
      addTodoAction({
        id: 0,
        name,
        completed: false
      })
    );

    store.getState();
  };

  render() {
    return (
      <React.Fragment>
        <h2>To-dos</h2>
        <input
          type="text"
          placeholder="Add to-do"
          ref={input => (this.input = input)}
        />
        <button onClick={this.addItem}>Add</button>
      </React.Fragment>
    );
  }
}

export default Todos;
