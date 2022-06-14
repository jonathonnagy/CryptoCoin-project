import React from "react";
import NumberPreseneter from "./NumberPreseneter";
import { useCounter } from "./CounterProvider";

const NumberModifier = () => {
  const { increment, decrement } = useCounter();

  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>

      <NumberPreseneter />
    </div>
  );
};

export default NumberModifier;
