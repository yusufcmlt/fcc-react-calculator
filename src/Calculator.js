import React, { useState, useEffect } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [currentDisplay, setCurrentDisplay] = useState("0");
  const [evalDisplay, setEvalDisplay] = useState("0");

  const clearDisplay = () => {
    setCurrentDisplay("0");
    playClick();
  };

  const typeOnDisplay = (calcButtonValue) => {
    let symbolsList = ["+", "-", "*", "/", "."];

    if (currentDisplay[0] === "0") {
      setCurrentDisplay(calcButtonValue);
    } else if (symbolsList.includes(calcButtonValue)) {
      if (!symbolsList.includes(currentDisplay[currentDisplay.length - 1])) {
        setCurrentDisplay(currentDisplay + calcButtonValue);
      }
    } else {
      setCurrentDisplay(currentDisplay + calcButtonValue);
    }
    console.log(currentDisplay);
    playClick();
  };

  const evalButton = () => {
    setCurrentDisplay(eval(currentDisplay));
    playClick();
  };

  const playClick = () => {
    const soundFile = document.getElementById("button-click");
    soundFile.currentTime = 0;
    soundFile.play();
  };

  return (
    <div className="calculator-container">
      <div className="calculator-display">
        <div className="calculator-display-message" id="display">
          {currentDisplay}
        </div>
      </div>
      <div className="calculator-buttons-container">
        <div className="buttons-row" id="first-row">
          <button
            className="calculator-button"
            id="clear"
            onClick={() => clearDisplay()}
          >
            Clear All
          </button>
          <button
            className="calculator-button"
            id="divide"
            onClick={() => typeOnDisplay("/")}
          >
            /
          </button>
        </div>
        <div className="buttons-row" id="second-row">
          <button
            className="calculator-button"
            id="seven"
            onClick={() => typeOnDisplay("7")}
          >
            7
          </button>
          <button
            className="calculator-button"
            id="eight"
            onClick={() => typeOnDisplay("8")}
          >
            8
          </button>
          <button
            className="calculator-button"
            id="nine"
            onClick={() => typeOnDisplay("9")}
          >
            9
          </button>
          <button
            className="calculator-button"
            id="multiply"
            onClick={() => typeOnDisplay("*")}
          >
            *
          </button>
        </div>
        <div className="buttons-row" id="third-row">
          <button
            className="calculator-button"
            id="four"
            onClick={() => typeOnDisplay("4")}
          >
            4
          </button>
          <button
            className="calculator-button"
            id="five"
            onClick={() => typeOnDisplay("5")}
          >
            5
          </button>
          <button
            className="calculator-button"
            id="six"
            onClick={() => typeOnDisplay("6")}
          >
            6
          </button>
          <button
            className="calculator-button"
            id="subtract"
            onClick={() => typeOnDisplay("-")}
          >
            -
          </button>
        </div>
        <div className="buttons-row" id="fourth-row">
          <button
            className="calculator-button"
            id="one"
            onClick={() => typeOnDisplay("1")}
          >
            1
          </button>
          <button
            className="calculator-button"
            id="two"
            onClick={() => typeOnDisplay("2")}
          >
            2
          </button>
          <button
            className="calculator-button"
            id="three"
            onClick={() => typeOnDisplay("3")}
          >
            3
          </button>
          <button
            className="calculator-button"
            id="add"
            onClick={() => typeOnDisplay("+")}
          >
            +
          </button>
        </div>
        <div className="buttons-row" id="fifth-row">
          <button
            className="calculator-button"
            id="zero"
            onClick={() => typeOnDisplay("0")}
          >
            0
          </button>
          <button
            className="calculator-button"
            id="decimal"
            onClick={() => typeOnDisplay(".")}
          >
            .
          </button>
          <button
            className="calculator-button"
            id="equals"
            onClick={() => evalButton()}
          >
            =
          </button>
          <audio
            id="button-click"
            src="https://www.zapsplat.com/wp-content/uploads/2015/sound-effects-35448/zapsplat_multimedia_button_press_plastic_click_002_36869.mp3"
          ></audio>
        </div>
      </div>
    </div>
  );
}
