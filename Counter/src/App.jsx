import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 20) {
      setCount((prevCount) => prevCount + 1);
      console.log("increase");
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
      console.log("decrease");
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Count : {count}</h2>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
}

export default App;
