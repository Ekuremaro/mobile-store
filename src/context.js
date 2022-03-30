import { useContext, useState, useEffect } from "react";

import React from "react";
import { storeProducts, detailProduct } from "./data";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [detailProd, setDetailProd] = useState(detailProduct);
  const [inCart, setInCart] = useState(false);
  const [cart, setCart] = useState([]);

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
  const addToCart = (id) => {};
  const tester = () => {
    console.log("tester");
  };
  return (
    <AppContext.Provider
      value={{ products, detailProd, handleDetail, addToCart, inCart }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export const useGlobalContext = () => useContext(AppContext);
