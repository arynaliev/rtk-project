import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  multiplyByAmount,
} from "../../redux/slices/counterSlice";

const CounterApp = () => {
  const { count } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  function onMinusClick() {
    console.log("minus");
    dispatch(decrement());
  }

  function onPlusClick() {
    console.log("plus");
    dispatch(increment());
  }

  function onPlusTenClick() {
    dispatch(incrementByAmount(10));
  }

  function onMultiplyByTen() {
    dispatch(multiplyByAmount(10));
  }

  return (
    <div>
      <button onClick={onMinusClick}>-</button>
      <p>{count}</p>
      <button onClick={onPlusClick}>+</button>
      <button onClick={onPlusTenClick}>+10</button>
      <button onClick={onMultiplyByTen}>*10</button>
    </div>
  );
};

export default CounterApp;
