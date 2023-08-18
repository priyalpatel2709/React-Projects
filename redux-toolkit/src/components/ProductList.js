import React, { useEffect, useState } from "react";
import { fetchproduct } from "../services/services";
import ProductCart from "./ProductCart";
const ProductList = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    let result = await fetchproduct();
    setProduct(result);
  };

  return (
    <div>
      <ProductCart products={products}/>
    </div>
  );
};

export default ProductList;
