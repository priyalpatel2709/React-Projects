import React, { useEffect, useState, useCallback } from "react";
import "../styles/ProductList.css";
// import { Link } from "react-router-dom";
import axios from "axios";
import ListTable from "./ListTable";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const deleteProduct = useCallback(
    async (id) => {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:5000/products/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `bearer ${JSON.parse(
                localStorage.getItem("token")
              )}`,
            },
          }
        );

        const result = response.data;
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== id)
        );
      } catch (error) {
        alert(`Something went wrong, please try again later. ${error.message}`);
      }
    },
    [setProducts]
  );

  useEffect(() => {
    getProduct();
  }, [deleteProduct]);

  const getProduct = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const localStorage_user = JSON.parse(localStorage.getItem("user"));

      if (!token || !localStorage_user) {
        localStorage.clear();
        return;
      }

      const response = await axios.get("http://127.0.0.1:5000/products", {
        headers: {
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });

      const result = response.data;
      setProducts(result);
      setIsLoading(false);
    } catch (error) {
      alert(`Something went wrong, please try again later. ${error.message}`);
    }
  };

  const handleChange = async (e) => {
    try {
      let key = e.target.value;

      if (key) {
        const response = await axios.get(
          `http://127.0.0.1:5000/search/${key}`,
          {
            headers: {
              authorization: `bearer ${JSON.parse(
                localStorage.getItem("token")
              )}`,
            },
          }
        );

        const result = response.data;
        setProducts(result);
      } else {
        getProduct();
      }
    } catch (error) {
      alert(`Something went wrong, please try again later. ${error.message}`);
    }
  };

  return (
    <div className="ProductList">
      <h1>Product List</h1>
      <div className="search-field">
        <input type="text" placeholder="Search" onChange={handleChange} />
      </div>
      
        <ListTable isLoading={isLoading}  deleteProduct={deleteProduct} products={products} />
      
    </div>
  );
};

export default ProductList;
