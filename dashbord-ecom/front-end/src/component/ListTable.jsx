import React from "react";
import { Link } from "react-router-dom";

const ListTable = ({ products, deleteProduct, isLoading }) => {
  console.log("products--->", products);
  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : products.length > 0 ? (
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
      ) : (
        <>
          <h1 style={{ color: "red", textAlign: "center", marginTop: "10%" }}>
            No Data Found ...
          </h1>
          <span style={{ marginLeft: "45%" }}>
            Add Product... <Link to="/add">Add Product</Link>
          </span>
        </>
      )}
      {}
    </>
  );
};

export default ListTable;
