import "./App.css";
import { useState } from "react";

function App() {
  const [greeting, setGreeting] = useState("Greeting Message");

  function handleClick(newGreeting) {
    setGreeting(newGreeting);
  }

  return (
    <div className="App">
      <div className="greeting-container">{greeting}</div>
      <div className="buttons">
        <button onClick={(e) => handleClick(`${e.target.innerText}`)}>
          สวัสดี!
        </button>
        <button onClick={(e) => handleClick(`${e.target.innerText}`)}>
          Hi!
        </button>
        <button onClick={(e) => handleClick(`${e.target.innerText}`)}>
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
