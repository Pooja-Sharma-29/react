import React, { useCallback, useState } from "react";

const Callback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const addTodo = useCallback(() => {
    setTodos([...todos, "New Todo"]);
  }, [todos]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <hr />
      <Todos todos={todos} addTodo={addTodo} />
    </div>
  );
};

const Todos = React.memo(({ todos, addTodo }) => {
  console.log("inside todos component");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </>
  );
});

export default Callback;
