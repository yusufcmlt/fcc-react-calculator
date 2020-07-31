import React, { useState, useEffect } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [currentDisplay, setCurrentDisplay] = useState("0");
  // eslint-disable-next-line
  const [calcEvaled, setCalcEvaled] = useState(false);
  const [decimalClicked, setDecimalClicked] = useState(false);
  const [displayFull, setDisplayFull] = useState(false);
  const symbolsList = ["+", "-", "*", "/"];

  useEffect(() => {
    if (!currentDisplay) {
      setCurrentDisplay("0");
    }
  }, [currentDisplay]);
  const clearDisplay = () => {
    setCurrentDisplay("0");
    playClick();
    setCalcEvaled(false);
    setDecimalClicked(false);
    setDisplayFull(false);
  };
  //DONT TOUCH THIS MONSTROSITY
  //DONT DO THIS AT HOME
  const typeOnDisplay = (calcButtonValue) => {
    if (!displayFull) {
      if (currentDisplay === "0") {
        setCurrentDisplay(calcButtonValue);
      } else if (symbolsList.includes(calcButtonValue)) {
        if (!symbolsList.includes(currentDisplay[currentDisplay.length - 1])) {
          setCurrentDisplay(currentDisplay + calcButtonValue);
        } else if (calcButtonValue !== "-") {
          let currentDisplayCopy = currentDisplay;
          currentDisplayCopy = currentDisplayCopy.slice(
            0,
            symbolsList.includes(currentDisplay[currentDisplay.length - 1]) &&
              symbolsList.includes(currentDisplay[currentDisplay.length - 2])
              ? currentDisplayCopy.length - 2
              : currentDisplayCopy.length - 1
          );
          setCurrentDisplay(currentDisplayCopy + calcButtonValue);
        } else if (calcButtonValue === "-") {
          if (!currentDisplay.endsWith("-")) {
            setCurrentDisplay(currentDisplay + calcButtonValue);
          }
        }
        setDecimalClicked(false);
      } else if (calcButtonValue === ".") {
        if (!decimalClicked) {
          setCurrentDisplay(currentDisplay + calcButtonValue);
          setDecimalClicked(true);
        }
      } else {
        setCurrentDisplay(currentDisplay + calcButtonValue);
      }
      if (currentDisplay && currentDisplay.length === 17) {
        setDisplayFull(true);
      }
    }
    playClick();
  };

  const delButton = () => {
    if (currentDisplay && currentDisplay.length > 1) {
      if (currentDisplay.endsWith(".")) setDecimalClicked(false);
      setCurrentDisplay(currentDisplay.slice(0, -1));
    } else {
      setCurrentDisplay("0");
    }
    playClick();
  };

  const evalButton = () => {
    if (currentDisplay) {
      let currentDisplayCopied = currentDisplay;
      if (
        symbolsList.includes(currentDisplay[currentDisplay.length - 1]) ||
        currentDisplay === "."
      ) {
        currentDisplayCopied = currentDisplay.slice(
          0,
          currentDisplay.length - 1
        );
      }
      if (currentDisplay.endsWith("-")) {
        currentDisplayCopied = currentDisplay.slice(
          0,
          currentDisplay.length - 2
        );
      }
      // eslint-disable-next-line
      setCurrentDisplay(eval(currentDisplayCopied));
      setCalcEvaled(true);
    } else {
      setCurrentDisplay("0");
    }
    if (currentDisplay && currentDisplay.includes(".")) {
      setDecimalClicked(true);
    } else {
      setDecimalClicked(false);
    }
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
        <div className="calculator-full-message">
          {displayFull ? "MAX" : "..."}
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
            className="calculator-button operators"
            id="del"
            onClick={() => {
              delButton();
            }}
          >
            {"<--"}
          </button>
          <button
            className="calculator-button operators"
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
            className="calculator-button operators"
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
            className="calculator-button operators"
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
            className="calculator-button operators"
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
            className="calculator-button operators"
            id="decimal"
            onClick={() => typeOnDisplay(".")}
          >
            .
          </button>
          <button
            className="calculator-button operators"
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
