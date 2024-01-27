import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Effect from "./components/Effect";
import Reducer from "./components/Reducer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Effect /> */}
      <Reducer />
    </>
  );
}

export default App;
