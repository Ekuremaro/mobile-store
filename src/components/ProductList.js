import React from "react";
import Product from "./Product";
import { useState } from "react";
import Title from "./Title";
import { storeProducts } from "../data";

const ProductList = () => {
  const [products, setProducts] = useState([storeProducts]);
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductList;
