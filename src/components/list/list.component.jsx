import React from "react";

const List = items => (
  <ul>
    {items.map(item => (
      <li>{item.name}</li>
    ))}
  </ul>
);

export default List;
