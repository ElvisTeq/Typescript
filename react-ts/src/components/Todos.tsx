import React from "react";
import TodoItem from "./TodoItem";
import Todo from "../models/todo";
import classes from "./Todos.module.css";

// TypeScript for Functional Components
// <{}> => To Define own Props type => items = (Array of strings)
// Todo[] => Expect Array of Todo Class
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  // <TodoItem> => Expects "text={}" because we used => "React.FC<{ text: string }>"
  // .bind => To pass a function with predefined arguments (item.id)
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
