import React from "react";
import { useGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import PaypalButton from "./PaypalButton";
import { useNavigate } from "react-router-dom";

const CartTotal = () => {
  const { clearCart, cartSubTotal, cartTax, cartTotal } = useGlobalContext();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right ">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => {
                  clearCart();
                }}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal :</span>{" "}
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax :</span>{" "}
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>{" "}
              <strong>$ {cartTotal}</strong>
            </h5>
            <PaypalButton
              total={cartTotal}
              clear={clearCart}
              navigate={navigate}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartTotal;
