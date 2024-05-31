import { useValue, useSetValueCallback } from "tinybase/ui-react";

import "./App.css";

function App() {
  let counter = useValue("counter");

  const handleIncrement = useSetValueCallback("counter", () => counter + 1, [
    counter,
  ]);

  return (
    <>
      <h1>Local first adventures</h1>
      <div className="button-container">
        <button onClick={handleIncrement}>Increment</button>
      </div>
      <div className="counter-container">{counter}</div>
    </>
  );
}

export default App;
