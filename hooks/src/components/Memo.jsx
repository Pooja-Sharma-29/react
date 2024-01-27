import React, { useState, useMemo } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    // console.log("increment")
    setCount(count + 1);
  };
  const decrement = () => {
    // console.log("decrement")
    setCount(count - 1);
  };

  const addTodo = () => {
    setTodos([...todos, "New Todo"]);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={decrement}>Decrement Count</button>
      <button onClick={increment}>Increment Count</button>
      <h2>Expensive Calculation</h2>
      <h3>{calculation}</h3>
      <hr />
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

const expensiveCalculation = (num) => {
  console.log("calculating....");
  for (let i = 0; i < 10000000; i++) {
    num += 1;
  }
  return num;
};

export default Memo;
