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
        `http://127.0.0.1:5000/products/user/${userId}`,
        {
          headers: {
            authorization: `bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );

      const result = response.data;
      console.log("result", result);
      setProducts(result);
      setIsLoading(false);
    } catch (error) {
      alert("Something went wrong...");
    }
  };

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
        alert("Something went wrong...");
      }
    },
    [setProducts]
  );
  return (
    <div>
      <h1 style={{textAlign:'center'}}>User Product List</h1>

      <ListTable
        isLoading={isLoading}
        deleteProduct={deleteProduct}
        products={products}
      />
    </div>
  );
};

export default UserDataUpdate;
