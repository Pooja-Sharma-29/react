import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddToDo";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl text-center">Todo App</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
