import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Todos from "./components/todos/todos.component";
import List from "./components/list/list.component";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Todos />;
        <List/>
      </Provider>
    );
  }
}

export default App;
