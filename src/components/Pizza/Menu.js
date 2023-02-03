import React from "react";
import styles from "./Menu.module.css";
import Pizza from "./Pizza";

export default function Menu() {
  const pizzas = [
    {
      name: "Neapolitan Pizza",
      description:
        "Features tomatoes, garlic, oregano, and extra virgin olive oil.",
      price: "20.99",
      id: "p1",
    },
    {
      name: "Chicago Pizza",
      description:
        "Beef, sausage, pepperoni, onion, mushrooms, and green peppers, placed underneath the tomato sauce.",
      price: "24.99",
      id: "p2",
    },
    {
      name: "Sicilian Pizza",
      description: "Tomato, onion, anchovies, and herbs.",
      price: "14.99",
      id: "p3",
    },
    {
      name: "Detroit Pizza",
      description:
        "Pepperoni, brick cheese (usually Wisconsin brick cheese), and tomato sauce",
      price: "17.99",
      id: "p4",
    },
  ];
  return (
    <div className={styles.menu}>
      {pizzas.map((pizza) => (
        <Pizza
          name={pizza.name}
          description={pizza.description}
          price={pizza.price}
          key={pizza.id}
          id={pizza.id}
        />
      ))}
    </div>
  );
}
