import { useState } from "react";

const HigherOrderComponent = (WrappedComponent) => {
  const HOC = () => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);
    return (
      <WrappedComponent
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
    );
  };
  return HOC;
};

export default HigherOrderComponent;
