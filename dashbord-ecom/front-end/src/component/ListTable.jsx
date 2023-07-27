import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ListTable.css";

const ListTable = ({ products, deleteProduct, isLoading }) => {
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

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
  
    const ellipsis = <span key="ellipsis">...</span>;
  
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={currentPage === i ? "active" : ""}
          >
            {i}
          </button>
        );
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={currentPage === i ? "active" : ""}
            >
              {i}
            </button>
          );
        }
        pageNumbers.push(ellipsis);
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={currentPage === i ? "active" : ""}
            >
              {i}
            </button>
          );
        }
      } else if (currentPage >= totalPages - 3) {
        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={currentPage === i ? "active" : ""}
            >
              {i}
            </button>
          );
        }
        pageNumbers.push(ellipsis);
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={currentPage === i ? "active" : ""}
            >
              {i}
            </button>
          );
        }
      } else {
        for (let i = 1; i <= 2; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={currentPage === i ? "active" : ""}
            >
              {i}
            </button>
          );
        }
        pageNumbers.push(ellipsis);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={currentPage === i ? "active" : ""}
            >
              {i}
            </button>
          );
        }
        pageNumbers.push(ellipsis);
        for (let i = totalPages - 1; i <= totalPages; i++) {
          pageNumbers.push(
            <button
              key={i}
              onClick={() => goToPage(i)}
              className={currentPage === i ? "active" : ""}
            >
              {i}
            </button>
          );
        }
      }
    }
  
    return pageNumbers;
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
                  <img src={item.image} alt="bla-bla-la"  width='100' height='100'/>
                  </td>
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
          <div className="pagination">
            <button onClick={goToPreviousPage} disabled={currentPage === 1}>
              Previous
            </button>
            {renderPageNumbers()}
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
          <span>
            Add Product... <Link to="/add">Add Product</Link>
          </span>
        </>
      )}
    </>
  );
};

export default ListTable;
