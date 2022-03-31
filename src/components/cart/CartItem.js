import React from "react";
import { useGlobalContext } from "../../context";

const CartItem = ({ id, title, img, price, total, count }) => {
  const { increaseQuantity, decreaseQuantity, clearCart, removeItem } =
    useGlobalContext();
  return (
    <div className="row my-2 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          alt={title}
          className="img-fluid"
        />
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">price : </span>
        {price}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span
              className="btn btn-black mx-1"
              onClick={() => decreaseQuantity(id)}
            >
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => increaseQuantity(id)}
            >
              +
            </span>
          </div>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon">
          <i
            className="fas fa-trash"
            onClick={() => {
              removeItem(id);
            }}
          />
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong>item total : $ {total}</strong>
      </div>
    </div>
  );
};

export default CartItem;
