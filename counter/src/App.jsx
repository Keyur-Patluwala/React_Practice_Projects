import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);
  const addfunc = () => {
    setCount(count + 1);
    if (count > 19) setCount(20);
  };

  const removefunc = () => {
    setCount(count - 1);
    if (count < 1) setCount(0);
  };

  return (
    <>
      <h1> Counter Project -by Keyur</h1>
      <h1>{count}</h1>
      <br />
      <button onClick={addfunc}>Add value</button>
      <br />
      <button onClick={removefunc}>Remove value</button>
    </>
  );
}

export default App;
