import React from "react";
import "./App.css";
import Calculator from "./Calculator.js";

function App() {
  return (
    <div className="App">
      <h1 className="calculator-heading">React Calculator</h1>
      <Calculator />
      <div className="created-by-message">
        <a
          className="github-link"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/yusufcmlt/fcc-react-calculator"
        >
          {" "}
        </a>
      </div>
    </div>
  );
}

export default App;
