import React from "react";
import { connect } from "react-redux";
import { store } from "../../redux/store";
import List from "../list/list.component";
import { generateID } from "../../utils/helpers";
import { addTodoAction } from "../../redux/todos/todo-actions";

class Todos extends React.Component {
  addItem = event => {
    event.preventDefault();
    const name = this.input.value;
    this.input.value = "";

    store.dispatch(
      addTodoAction({
        id: generateID(),
        name,
        completed: false
      })
    );
    return this.props.todos;
  };

  render() {
    const { todos } = this.props;
    return (
      <React.Fragment>
        <h2>To-dos</h2>
        <input
          type="text"
          placeholder="Add to-do"
          ref={input => (this.input = input)}
        />
        <button onClick={this.addItem}>Add</button>
        {todos.length === 0 ? null : <List items={todos} />}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  null
)(Todos);
