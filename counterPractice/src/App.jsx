import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);
  const increment = () => {
    setCount(count + 1);
    if (count >= 20) setCount(20);
  };
  const decrement = () => {
    setCount(count - 1);
    if (count <= 0) setCount(0);
  };

  return (
    <>
      <h1>Hello Keyur</h1>
      <h1>Counter Project</h1>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment count</button>
      <button onClick={decrement}>Decrement count</button>
    </>
  );
}

export default App;
