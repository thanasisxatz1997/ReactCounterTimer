import { createElement, useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(10);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="App">
      {timer >= 0
        ? <h1>Hello CodeSandbox</h1> && (
            <h2>Start editing to see some magic happen!</h2>
          ) && (
            <div>
              <h1>Time left: {timer}</h1>
              <h1> Counter: {counter}</h1>
              <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
          )
        : null}
    </div>
  );
}
