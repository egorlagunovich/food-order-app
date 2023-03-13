import React, { useState } from "react";
import styles from "./Checkout.module.css";

export default function Checkout(props) {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [isNotFormValid, setIsNotFormValid] = useState(null);
  const confirmHandler = (e) => {
    e.preventDefault();
    if (
      name.trim().length === 0 ||
      adress.trim().length === 0 ||
      phone.trim().length === 0
    ) {
      setIsNotFormValid(true);
    } else {
      setIsNotFormValid(false);
      props.onConfirmed(true);
      props.onOrderedMenu(false);
    }
  };
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onAdressChange = (e) => {
    setAdress(e.target.value);
  };
  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const notValidMessage = (
    <div>
      <p className={styles.messageError}>
        Form is not valid. Inputs must not be empty.{" "}
      </p>
    </div>
  );
  const onCloseHandle = () => {
    props.onClose();
    props.onConfirmed(false);
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={onNameChange} value={name} />
      </div>
      <div className={styles.control}>
        <label htmlFor="adress">Your Adress</label>
        <input
          type="text"
          id="adress"
          value={adress}
          onChange={onAdressChange}
        />
      </div>
      <div className={styles.control}>
        <label htmlFor="phone">Your Phone Number</label>
        <input type="text" id="phone" value={phone} onChange={onPhoneChange} />
      </div>
      {isNotFormValid && notValidMessage}
      <div className={styles.actions}>
        <button onClick={onCloseHandle}>Cancel</button>
        <button
          type="button"
          className={styles.submit}
          onClick={confirmHandler}
        >
          Confirm
        </button>
      </div>
    </form>
  );
}
