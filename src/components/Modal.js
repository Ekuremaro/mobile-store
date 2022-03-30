import React from "react";
import { useGlobalContext } from "../context";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

const Modal = () => {
  const { modalOpen, closeModal, modalProduct } = useGlobalContext();
  const { img, title, price } = modalProduct;

  if (!modalOpen) {
    return null;
  } else {
    return (
      <ModalContainer>
        <div className="container">
          <div className="row">
            <div
              id="modal"
              className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
            >
              <h5>item added to cart</h5>
              <img src={img} alt="product" className="img-fluid" />
              <h5>{title}</h5>
              <h5 className="text-blue">
                <strong>price : $ {price}</strong>
              </h5>
              <Link to="/">
                <ButtonContainer onClick={closeModal}>
                  continue shopping
                </ButtonContainer>
              </Link>
              <Link to="/cart">
                <ButtonContainer onClick={closeModal} cart>
                  add to cart
                </ButtonContainer>
              </Link>
            </div>
          </div>
        </div>
      </ModalContainer>
    );
  }
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
export default Modal;
