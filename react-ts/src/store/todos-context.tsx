import React, { useState } from "react";
import Todo from "../models/todo";

// Type Alias
type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void; // addTodoHandler() receives (todoText: string) as argument
  removeTodo: (id: string) => void; // removeTodoHandler() receives (todoId: string) as argument
};

// Defining { children } type
type Props = {
  children: React.ReactNode;
};

// Creating Context
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

// Providing Context
// <Props> = ({ children }) => Defining Chindren Type in JSX
const TodosContextProvider: React.FC<Props> = ({ children }) => {
  // Defining Type for useState() => (Telling TS we are working with Arrays of Todo Component)
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    // .concat => Merging/Storing newTodo
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
