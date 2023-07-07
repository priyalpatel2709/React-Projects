import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Admin.css"; // Import the CSS file containing the styles

const Admin = () => {
  const [data, setData] = useState({
    users: [],
    products: [],
    userProcuct: [],
    userName: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        let result = await axios.get("http://127.0.0.1:5000/admin");
        let responseData = result.data;
        let arrData = Object.values(responseData);

        setData((prevData) => ({
          ...prevData,
          products: [...arrData[1]],
        }));

        setData((prevData) => ({
          ...prevData,
          users: [...arrData[0]],
        }));
      } catch (error) {
        alert(error.message);
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  const productOfuser = (userId, name) => {
    const userProducts = data.products.filter(
      (product) => product.userId === userId
    );
    setData((preval) => ({
      ...preval,
      userProcuct: [...userProducts],
      userName: name,
    }));
  };

  const mapprduser = data.users
    .filter((val) => val.name && val.email && val.password)
    .map((val, i) => (
      <tr key={val._id} onClick={() => productOfuser(val._id, val.name)}>
        <td>{i+1}</td>
        <td >{val.name}</td>
        <td>{val.email}</td>
        <td>{val.password}</td>
      </tr>
    ));

  const maapedProduct = data?.products
    .filter(
      (val, i) =>
        val.category && val.company && val.name && val.price && val.userId
    )
    .map((val, i) => (
      <tr key={i + 1}>
        <td>{i+1}</td>
        <td>{val.category}</td>
        <td>{val.company}</td>
        <td>{val.name}</td>
        <td>{val.price}</td>
        <td>{val.userId}</td>
      </tr>
    ));

  const maapeduserProcuct = data?.userProcuct
    .filter(
      (val) =>
        val.category && val.company && val.name && val.price && val.userId
    )
    .map((val, i) => (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{val.category}</td>
        <td>{val.company}</td>
        <td>{val.name}</td>
        <td>{val.price}</td>
      </tr>
    ));

  return (
    <>
      <div className="table-container">
        <h3>Usre Info</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>{mapprduser}</tbody>
        </table>
        <h3>Product Info</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Sr.no</th>
              <th>Category</th>
              <th>Company</th>
              <th>Name</th>
              <th>Price</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>{maapedProduct}</tbody>
        </table>
      </div>

      {data.userProcuct.length > 0 ? (
        <>
        <h2 className="title">{`${data.userName} user Info`}</h2>
           
          <table className="my-table">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Category</th>
                <th>Company</th>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{maapeduserProcuct}</tbody>
          </table>
        </>
      ) : (
        data.userName && (
          <p style={{ paddingLeft: "43%", paddingTop: "7%", color: "red" }}>
            {data.userName} has not added any products.
          </p>
        )
      )}
    </>
  );
};

export default Admin;
