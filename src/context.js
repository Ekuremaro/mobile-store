import { useContext, useState, useEffect } from "react";

import React from "react";
import { storeProducts, detailProduct } from "./data";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [detailProd, setDetailProd] = useState(detailProduct);
  const [inCart, setInCart] = useState(false);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const increaseQuantity = (id) => {
    console.log("increase");
  };
  const decreaseQuantity = (id) => {
    console.log("decrease");
  };
  const removeItem = (id) => {
    console.log("removed");
  };

  const clearCart = () => {
    console.log("cleared");
  };

  useEffect(() => {
    setProducts(storeProducts);
  }, []);

  const getItem = (id) => {
    const product = products.find((item) => item.id === id);
    return product;
  };

  const handleDetail = (id) => {
    const product = getItem(id);
    setDetailProd(product);
  };

  const openModal = (id) => {
    const product = getItem(id);
    setModalProduct(product);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const addToCart = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    setProducts(tempProducts);
    setInCart(true);
    setCart([...cart, product]);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        detailProd,
        handleDetail,
        addToCart,
        inCart,
        cart,
        openModal,
        closeModal,
        modalProduct,
        modalOpen,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export const useGlobalContext = () => useContext(AppContext);
