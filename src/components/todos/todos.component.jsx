import React from "react";

import List from "../list/list.component";
import { generateID } from "../../utils/helpers";
import { addTodoAction } from "../../redux/todos/todo-actions";
import { store } from "../../redux/store";

class Todos extends React.Component {
  addItem = event => {
    event.preventDefault();
    const name = this.input.value;
    this.input.value = "";

    store.dispatch(
      addTodoAction({
        id: generateID(0),
        name,
        completed: false
      })
    );
  };

  render() {
    const { todos } = store.getState();
    console.log(todos);
    return (
      <React.Fragment>
        <h2>To-dos</h2>
        <input
          type="text"
          placeholder="Add to-do"
          ref={input => (this.input = input)}
        />
        <button onClick={this.addItem}>Add</button>

        {todos.length === 0 ? <p>Nothing to show</p> : <List items={todos} />}
      </React.Fragment>
    );
  }
}

export default Todos;
