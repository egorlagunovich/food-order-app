import React from "react";
import styles from "./Header.module.css";
import pizzaImage from "./../../assets/pizza.jpg";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.name}>Tasty And Point</div>
        <HeaderCartButton onShownCart={props.onShownCart} />
      </header>
      <div className={styles.mainImage}>
        <img src={pizzaImage} alt="pizza" />
      </div>
    </>
  );
}
