import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="buttons">
        <button onClick={(e) => setGreetingMessage(e.target.innerText)}>
          สวัสดี!
        </button>
        <button onClick={(e) => setGreetingMessage(e.target.innerText)}>
          Hi!
        </button>
        <button onClick={(e) => setGreetingMessage(e.target.innerText)}>
          你好!
        </button>
      </div>
    </div>
  );
}

export default App;
