import React from "react";
import { useRef } from "react";

// hrmlFor="text" => CONNECTS => id="text"
const NewTodo = () => {
  // <HTMLInputElement> => Type for HTML Input Elements
  const todoTextInputRef = useRef<HTMLInputElement>(null); // Requires Default Starting Value (null) because no value

  // TypeScript expects/automatically add this
  // ?.value => string | undefined
  // !.value => string (use if 100% sure we have value)
  const enteredText = todoTextInputRef.current!.value;

  if (enteredText.trim().length === 0) {
    // throw err
    return;
  }

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
