import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="count-container">
      <h2 className="count"> {count} </h2>
      <div className="button-list">
        <button className="minus" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button className="plus" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button className="reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
