import { useState } from "react";
import Todos from "./components/Todos"; // Todos for JSX
import Todo from "./models/todo"; // Todos Data structure (Class Component)
import NewTodo from "./components/NewTodo";
import "./App.css";

function App() {
  // Defining Type for useState() => (Telling TS we are working with Arrays of Todo Component)
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    // .concat => Merging/Storing newTodo
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
