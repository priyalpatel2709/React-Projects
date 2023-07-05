import React, { useEffect, useState, useCallback } from "react";
import "../styles/ProductList.css";
import { Link } from "react-router-dom";
import axios from "axios";

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
        alert("Something went wrong...");
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
      setIsLoading(false); // Set isLoading to false when data fetching is complete
    } catch (error) {
      alert("Something went wrong...");
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
      alert("Something went wrong...");
    }
  };

  return (
    <div className="ProductList">
      <h1>Product List</h1>
      <div className="search-field">
        <input type="text" placeholder="Search" onChange={handleChange} />
      </div>
      {isLoading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : products.length > 0 ? (
        <table className="dynamic-table">
          {
            <table className="dynamic-table">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Company</th>
                  <th>Category</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.company}</td>
                    <td>{item.category}</td>
                    <td>
                      <button
                        className="td-button"
                        type="button"
                        onClick={() => deleteProduct(item._id)}
                      >
                        Delete
                      </button>
                      <button className="td-button">
                        <Link to={`/update/${item._id}`}>Update</Link>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          }
        </table>
      ) : (
        <h1 style={{ color: "red", textAlign: "center", marginTop: "10%" }}>
          No Data Found ...
        </h1>
      )}
    </div>
  );
};

export default ProductList;
