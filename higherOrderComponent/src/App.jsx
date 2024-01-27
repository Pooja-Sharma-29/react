import HigherOrderComponent from "./components/HigherOrderComponent";

function App({ count, increment, decrement, reset }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default HigherOrderComponent(App);
