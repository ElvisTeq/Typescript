import Todos from "./components/Todos"; // Todos for JSX
import Todo from "./models/todo"; // Todos Data structure (Class Component)
import "./App.css";

function App() {
  const todos = [new Todo("Learn React"), new Todo("Learn TypeScript")];

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
