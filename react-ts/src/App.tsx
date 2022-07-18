import Todos from "./components/Todos"; // Todos for JSX
import Todo from "./models/todo"; // Todos Data structure (Class Component)
import NewTodo from "./components/NewTodo";
import "./App.css";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  const addTodoHandler = (todoText: string) => {};

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
