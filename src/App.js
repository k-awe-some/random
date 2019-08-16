import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Todos from "./components/todos/todos.component";
import "./App.css";

class App extends React.Component {
  render() {
    const { todos } = store.getState();
    return (
      <Provider store={store}>
        <Todos todos={todos} />;
      </Provider>
    );
  }
}

export default App;
