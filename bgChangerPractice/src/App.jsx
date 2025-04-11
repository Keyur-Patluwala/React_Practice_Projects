import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("blue");
  const changeColor = () => {};
  return (
    <>
      <h1>BG Changer Project</h1>
      <div className="bg-color-red">
        <button onClick={changeColor}>Black</button>
        <br />
        <button>Red</button>
        <br />
        <button>Blue</button>
        <br />
      </div>
    </>
  );
}

export default App;
