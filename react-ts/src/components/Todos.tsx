import React from "react";

import Todo from "../models/todo";

// TypeScript for Functional Components
// <{}> => To Define own Props type => items = (Array of strings)
// Todo[] => Expect Array of Todo Class
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
