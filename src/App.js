import React from "react";
import "./App.css";
import Calculator from "./Calculator.js";

function App() {
  return (
    <div className="App">
      <h1 className="calculator-heading">React Calculator</h1>
      <Calculator />
      <div className="created-by-message">
        Created by{" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/pdouu"
        >
          pdouu
        </a>
      </div>
    </div>
  );
}

export default App;
