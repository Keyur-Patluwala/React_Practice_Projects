import { useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setnumberAllowed] = useState("false");
  const [charAllowed, setcharAllowed] = useState("false");
  const [password, setPassword] = useState("false");

  const passwordGen = () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()-_=+[]{}|;:'";

    for (let i = 0; i < str.length; i++) {
      let char = Math.floor(Math.random() * 10 + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  };
  return (
    <>
      <div className="width-100 height-100 "></div>
    </>
  );
}

export default App;
