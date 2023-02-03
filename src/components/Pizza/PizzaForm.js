import React, { useRef, useState } from "react";
import styles from "./PizzaForm.module.css";

export default function PizzaForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const onSubmitHandle = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.addToCartHandler(enteredAmountNumber);
  };

  return (
    <form className={styles.addPizza} onSubmit={onSubmitHandle}>
      <div>
        <label htmlFor="num">Amount</label>
        <input
          ref={amountInputRef}
          id="num"
          type="number"
          min="1"
          max="5"
          defaultValue="1"
        />
      </div>
      <button onClick={onSubmitHandle} className={styles.addBut}>
        + Add
      </button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}
