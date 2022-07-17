import React from "react";
import TodoItem from "./TodoItem";
import Todo from "../models/todo";

// TypeScript for Functional Components
// <{}> => To Define own Props type => items = (Array of strings)
// Todo[] => Expect Array of Todo Class
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  // <TodoItem> => Expects "text={}" because we used => "React.FC<{ text: string }>"
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
