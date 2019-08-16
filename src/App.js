import React from "react";
import { store } from "./redux/store";
import "./App.css";

class App extends React.Component {
  render() {
    console.log(store);
    return null;
  }
}

export default App;
