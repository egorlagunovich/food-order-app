import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

export default function Cart(props) {
  const [isOrdered, setIsOrdered] = useState(null);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const onOrder = () => {
    setIsOrdered(true);
  };
  if (isConfirmed) {
    cartCtx.clearCart();
  }
  const confirmMessage = (
    <>
      <p className={styles.confirmed}>Confirmed!</p>
      <button className={styles.button} onClick={props.onCloseCart}>
        Close
      </button>
    </>
  );
  const cartItems = (
    <ul className={styles.cartItems}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onCloseCart}>
      {isConfirmed ? (
        confirmMessage
      ) : (
        <>
          {cartItems}
          <div className={styles.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
          </div>
          {isOrdered && (
            <Checkout
              onClose={props.onCloseCart}
              onOrderedMenu={setIsOrdered}
              onConfirmed={setIsConfirmed}
            />
          )}
          {!isOrdered && (
            <div className={styles.actions}>
              <button
                className={styles["button--alt"]}
                onClick={props.onCloseCart}
              >
                Close
              </button>
              {hasItems && (
                <button className={styles.orderBut} onClick={onOrder}>
                  Order
                </button>
              )}
            </div>
          )}
        </>
      )}
    </Modal>
  );
}
