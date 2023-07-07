import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Admin.css";
// import { useEffect } from "react";

const Admin = () => {
  const [data, setData] = useState({
    users: [],
    products: [],
  });

  useEffect(() => {
    const getData = async () => {
      try {
        let result = await axios.get("http://127.0.0.1:5000/admin");
        let responseData = result.data;
        let arrData = Object.values(responseData);

        setData((prevData) => ({
          ...prevData,
          products: [...prevData.products, ...arrData[1]],
        }));

        setData((prevData) => ({
          ...prevData,
          users: [...prevData.users, ...arrData[0]],
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  const mapprduser = data.users
    .filter((val) => val.name && val.email && val.password)
    .map((val) => (
      <tr key={val._id}>
        <td>{val.name}</td>
        <td>{val.email}</td>
        <td>{val.password}</td>
      </tr>
    ));

  const maapedProduct = data.products
    .filter(
      (val) =>
        val.category && val.company && val.name && val.price && val.userId
    )
    .map((val) => (
      <tr key={val._id}>
        <td>{val.category}</td>
        <td>{val.company}</td>
        <td>{val.name}</td>
        <td>{val.price}</td>
        <td>{val.userId}</td>
      </tr>
    ));

  console.log("users", data.users[0]);
  console.log("products", data.products[0]);
  return (
    <div className="row">
      <div className="column">
        <h2>Users</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>{mapprduser}</tbody>
        </table>
      </div>
      <div className="column">
        <h2>Products</h2>
        <table>
          <thead>
            <tr>
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
    </div>
  );
};

export default Admin;
