import React from "react";

// TypeScript for Functional Components
// <{}> => To Define own Props type => items = (Array of strings)
const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
