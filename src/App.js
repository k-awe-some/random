import React from "react";
import { store } from "./redux/store";
import Todos from "./components/todos/todos.component";
import "./App.css";

class App extends React.Component {
  render() {
    return <Todos />;
  }
}

export default App;
