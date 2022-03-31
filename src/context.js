import { useContext, useState, useEffect } from "react";

import React from "react";
import { storeProducts, detailProduct } from "./data";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [detailProd, setDetailProd] = useState(detailProduct);

  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const increaseQuantity = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.count * product.price;
    setCart([...tempCart]);
  };
  const decreaseQuantity = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    product.total = product.count * product.price;
    setCart([...tempCart]);
  };
  const removeItem = (id) => {
    let tempProducts = [...products];
    let tempCart = [...cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    setCart(tempCart);
    setProducts([...tempProducts, removedProduct]);
  };

  const clearCart = () => {
    setCart([]);
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    setProducts(products);
  };

  useEffect(() => {
    addTotals();
  }, [cart]);

  useEffect(() => {
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    setProducts(products);
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

  const addTotals = () => {
    let subTotal = 0;
    cart.map((item) => {
      subTotal += item.total;
      return subTotal;
    });
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setCartSubTotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
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
    setDetailProd(product);
    setCart([...cart, product]);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        detailProd,
        handleDetail,
        addToCart,

        cart,
        openModal,
        closeModal,
        modalProduct,
        modalOpen,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        removeItem,
        cartSubTotal,
        cartTax,
        cartTotal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export const useGlobalContext = () => useContext(AppContext);
