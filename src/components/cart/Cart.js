import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { useGlobalContext } from "../../context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

const Cart = () => {
  const { cart } = useGlobalContext();

  if (cart.length > 0) {
    return (
      <React.Fragment>
        <Title name="your" title="cart" />
        <CartColumns />
        <CartList />
        <CartTotal />
      </React.Fragment>
    );
  } else {
    return <EmptyCart />;
  }
};

export default Cart;
