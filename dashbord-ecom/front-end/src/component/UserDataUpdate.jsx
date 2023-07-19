import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import ListTable from "./ListTable";

const UserDataUpdate = () => {
  const auth = localStorage.getItem("user");
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (auth) {
      const userId = JSON.parse(auth)._id;
      getUserProducts(userId);
    }
  }, [auth]);
  const getUserProducts = async (userId) => {
    try {
      const response = await axios.get(
        `https://srever-ecomm.vercel.app/products/user/${userId}`
      );

      const result = response.data;
      console.log("result", result);
      setProducts(result);
      setIsLoading(false);
    } catch (error) {
      alert(`Something went wrong, please try again later. ${error.message}`);
    }
  };

  const deleteProduct = useCallback(
    async (id) => {
      try {
        const response = await axios.delete(
          `https://srever-ecomm.vercel.app/products/${id}`);

     
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
  return (
    <div style={{ textAlign: "center" }}>
      <h1>User Product List</h1>

      <ListTable
        isLoading={isLoading}
        deleteProduct={deleteProduct}
        products={products}
      />
    </div>
  );
};

export default UserDataUpdate;
