import React from "react";
import styles from "./InfoComponent.module.css";

export default function InfoComponent() {
  return (
    <div className={styles.info}>
      <h1>Tasty Pizza, Delivered To you</h1>
      <p>
        Choose your favorite pizza from our broad selection of available pizzas
        and enjoy a delicious luch or dinner at home.
      </p>
      <p>
        All our pizzas are cooked with high-quality ingredients, just-in-time
        and of course by experienced chefs!
      </p>
    </div>
  );
}
