import React from "react";
import { Link, Route } from "react-router-dom";
import Category from "./Category";
import Product from "./Products";

const Product = ({ match, data }) => {
  const product = data.find((p) => p.id == match.params.productId);
  let productData;

  if (product)
    productData = (
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <hr />
        <h4>{product.status}</h4>
      </div>
    );
  else productData = <h2>Sorrt. product doesn't exist</h2>;

  return (
    <div>
      <div>{product.name}</div>
    </div>
  );
};

export default Product;
