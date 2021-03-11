import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const math = ['+','-','*','/'];
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef.current.focus());

  function Ismath(input)
  {
    if(math.includes(input))
    {
      return true;
    }
    else{
      return false;
  }
  function handleClick(e) {
    if(result.length>1 && (Ismath(result.substr(-1))) && Ismath(e.target.name))
    {
        setResult(result.slice(0,-1)+e.target.name)
    }
    else{
        setResult(result.concat(e.target.name));
    }
  }
  function backspace() {
    setResult(result.slice(0, -1));
  }

  function clear() {
    setResult("");
  }

  function calculate() {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("error");
    }
  }

  return (
    <div className="calc-app">
      <from>
        <input type="text" value={result} ref={inputRef} />
      </from>

      <div className="keypad">
        <button id="clear" onClick={clear}>
          Clear
        </button>
        <button id="backspace" onClick={backspace}>
          C
        </button>
        <button name="+" onClick={handleClick}>
          +
        </button>
        <button name="7" onClick={handleClick}>
          7
        </button>
        <button name="8" onClick={handleClick}>
          8
        </button>
        <button name="9" onClick={handleClick}>
          9
        </button>
        <button name="-" onClick={handleClick}>
          -
        </button>
        <button name="4" onClick={handleClick}>
          4
        </button>
        <button name="5" onClick={handleClick}>
          5
        </button>
        <button name="6" onClick={handleClick}>
          6
        </button>
        <button name="*" onClick={handleClick}>
        *
        </button>
        <button name="1" onClick={handleClick}>
          1
        </button>
        <button name="2" onClick={handleClick}>
          2
        </button>
        <button name="3" onClick={handleClick}>
          3
        </button>
        <button name="/" onClick={handleClick}>
          /
        </button>
        <button name="0" onClick={handleClick}>
          0
        </button>
        <button name="." onClick={handleClick}>
          .
        </button>
        <button id="result" onClick={calculate}>
          Result
        </button>
      </div>
    </div>
  );
}

export default App;