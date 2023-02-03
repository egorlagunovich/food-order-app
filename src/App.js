import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer";
import Header from "./components/Layout/Header";
import InfoComponent from "./components/Pizza/InfoComponent";
import Menu from "./components/Pizza/Menu";
import CartProvider from "./store/CartProvider";

function App() {
  const [isShownCart, setIsShownCart] = useState(false);
  const onShownCart = () => {
    setIsShownCart(true);
  };
  const onCloseCart = () => {
    setIsShownCart(false);
  };
  return (
    <CartProvider>
      {isShownCart && <Cart onCloseCart={onCloseCart} />}
      <Header onShownCart={onShownCart} />
      <InfoComponent />
      <main>
        <Menu />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
