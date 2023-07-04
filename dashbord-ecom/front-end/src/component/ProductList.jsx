import React, { useEffect, useState, useCallback } from "react";
import "../styles/ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  // console.log('products',products);

  const deleteProduct = useCallback(
    async (id) => {
      console.log(`delete is working ${id}`);
      let result = await fetch(`http://127.0.0.1:5000/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.log(result);
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
    console.log(result);
    setProducts(result);
  };

  return (
    <div className="ProductList">
      <h1>Product List</h1>
      {products.length > 0 ? (
        <table className="dynamic-table">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Price</th>
              <th>Company</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.name}</td>
                <td>{row.price}</td>
                <td>{row.company}</td>
                <td>{row.category}</td>
                <td>
                  <button
                    className="td-button"
                    type="button"
                    onClick={() => deleteProduct(row._id)}
                  >
                    Delete
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
