import React from "react";
import { useRef, useContext } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  // <HTMLInputElement> => Type for HTML Input Elements
  const todoTextInputRef = useRef<HTMLInputElement>(null); // Requires Default Starting Value (null) because no value

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // TypeScript expects/automatically add this
    // ?.value => string | undefined
    // !.value => string (use if 100% sure we have value)
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw err
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  // hrmlFor="text" => CONNECTS => id="text"
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
