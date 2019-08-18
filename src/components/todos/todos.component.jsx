import React from "react";
import { store } from "../../redux/store";
import { generateID } from "../../utils/helpers";
import { addTodoAction } from "../../redux/todos/todo-actions";

class Todos extends React.Component {
  state = {
    todo: ""
  };

  handleInput = event => {
    this.setState({todo: event.target.value})
  };

  addItem = event => {
    event.preventDefault();
    const {todo} = this.state

    store.dispatch(
      addTodoAction({
        id: generateID(),
        todo,
        completed: false
      })
    );
    this.setState({todo:""})
  };

  render() {
    return (
      <>
        <h2>To-dos</h2>
        <input
          type="text"
          placeholder="Add to-do"
          value={this.state.todo}
          onChange={this.handleInput}
        />
        <button onClick={this.addItem}>Add</button>
      </>
    );
  }
}

export default Todos;
