import { useState } from "react";
import "./App.css";

function App() {
  const [word, setWord] = useState("Greeting Message");
  const addClick = (enterWord) => {
    setWord(enterWord);
  };

  return (
    <div className="App">
      <div className="greeting-container">{word}</div>
      <div className="buttons">
        <button onClick={() => addClick("สวัสดี!")}>สวัสดี!</button>
        <button onClick={() => addClick("Hi!")}>Hi!</button>
        <button onClick={() => addClick("你好!")}>你好!</button>
      </div>
    </div>
  );
}

export default App;
