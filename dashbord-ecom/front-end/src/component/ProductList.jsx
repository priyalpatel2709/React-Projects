import React, { useEffect, useState, useCallback } from "react";
import "../styles/ProductList.css";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  // console.log('products',products);

  const deleteProduct = useCallback(
    async (id) => {
      // console.log(`delete is working ${id}`);
      let result = await fetch(`http://127.0.0.1:5000/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      // console.log(result);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
    },
    [setProducts]
  );
  useEffect(() => {
    getProduct();
  }, [deleteProduct]);

  const getProduct = async () => {
    let result = await fetch(`http://127.0.0.1:5000/products`);
    result = await result.json();
    // console.log(result);
    setProducts(result);
  };

  const handleChange = async (e) => {
    // console.log(e.target.value);
    let key = e.target.value;

    if (key) {
      let result = await fetch(`http://127.0.0.1:5000/search/${key}`);
      result = await result.json();
      console.log(result);
      setProducts(result);
    } else {
      getProduct();
    }
  };

  return (
    <div className="ProductList">
      <h1>Product List</h1>
      <div className="search-field">
        <input
          type="text"
          placeholder="Search"
          // value={searchTerm}
          onChange={handleChange}
        />
      </div>
      {products.length > 0 ? (
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
            {products?.map((item, index) => (
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
      ) : (
        <h1 style={{ color: "red", textAlign: "center", marginTop: "10%" }}>
          No Data Found ...
        </h1>
      )}
    </div>
  );
};

export default ProductList;
