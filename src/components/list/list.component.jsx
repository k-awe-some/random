import React from "react";
import {connect} from "react-redux"

const List = ({items:{todos}}) => (
  <ul>
    {todos.map(item => (
      <li key={item.id}>{item.todo}</li>
    ))}
  </ul>
)

const mapStateToprops = state => ({items:state})

export default connect(mapStateToprops,null)(List);
