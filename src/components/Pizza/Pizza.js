import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import styles from "./Pizza.module.css";
import PizzaForm from "./PizzaForm";

export default function Pizza(props) {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };  

  return (
    <div className={styles.pizza}>
      <div className={styles.infoPizza}>
        <h3>{props.name}</h3>
        <p className={styles.description}>{props.description}</p>
        <p className={styles.price}>${props.price}</p>
      </div>
      <PizzaForm id={props.id} addToCartHandler={addToCartHandler} />
    </div>
  );
}
