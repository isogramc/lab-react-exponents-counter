import { useState } from "react";

const Counter = ({counter, setCounter}) => {


  //const [count, setCount] = useState(0);

  const decrement = () => setCounter((counter) => counter - 1);
  const increment = () => setCounter((counter) => counter + 1);

  return (
    <div className="counter-container">
      <p className="counter-value">{counter}</p>
      <button className="counter-button" onClick={decrement}>-</button>
      <button className="counter-button" onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
