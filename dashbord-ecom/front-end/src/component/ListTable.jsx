import React, { useState } from "react";
import { Link } from "react-router-dom";

const ListTable = ({ products, deleteProduct, isLoading }) => {
  console.log("products--->", products);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;
  const totalPages = Math.ceil(products.length / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = products.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  return (
    <>
      {isLoading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : products.length > 0 ? (
        <>
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
              {currentRows.map((item, index) => (
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
          <div>
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </>
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
