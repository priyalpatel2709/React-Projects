import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "../styles/Admin.css";
import PopupForm from "./PopupForm";
import { Link } from "react-router-dom";

const Admin = () => {
  const [data, setData] = useState({
    users: [],
    products: [],
    userProduct: [],
    userName: "",
    userId: "",
    userPassword: "",
    userEmail: "",
    updateName: "",
    updateEmail: "",
    updatePassword: "",
  });

  const [boolVal, setBoolVal] = useState({
    modify: false,
    isOpen: false,
  });

  const fetchData = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:5000/admin");
      const { dataFromModel1, dataFromModel2 } = result.data;

      setData((prevData) => ({
        ...prevData,
        users: dataFromModel1,
        products: dataFromModel2,
      }));
    } catch (error) {
      alert(`Something went wrong, please try again later. ${error.message}`);
      console.error("Error fetching data:", error);
    }
  };

  const deleteUser = useCallback(async (info, id) => {
    if (info === "user") {
      try {
        let result = await axios.delete(
          `http://127.0.0.1:5000/admin/user-delete/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `bearer ${JSON.parse(
                localStorage.getItem("token")
              )}`,
            },
          }
        );
        if (result.data.deletedCount === 1) {
          fetchData();
          alert("deleteed");
        } else {
          alert("item not found");
        }
      } catch (error) {
        alert(`Something went wrong, please try again later. ${error.message}`);
      }
    } else {
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
        if (result.deletedCount === 1) {
          alert("deleted");
          fetchData();
        } else {
          alert("somethig is wrong...");
        }
        console.log(result);
      } catch (error) {
        alert(`Something went wrong, please try again later. ${error.message}`);
      }
    }
  }, []);

  const updateData = useCallback((info, id, name, email, password) => {
    if (info === "user") {
      setBoolVal((prevVal) => ({ ...prevVal, isOpen: true }));
      setData((prevData) => ({
        ...prevData,
        userId: id,
        userName: name,
        userPassword: password,
        userEmail: email,
      }));
    } else {
      console.log("i am ??");
    }
  }, []);

  const saveUpdatedData = useCallback(async () => {
    console.log("save clicked");
    setBoolVal((prevVal) => ({ ...prevVal, isOpen: false }));

    let result = await axios.put(
      `http://127.0.0.1:5000/admin/user-update/${data.userId}`,
      {
        name: data.userName,
        email: data.userEmail,
        password: data.userPassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    console.log(result.data);
    if (result.data.modifiedCount === 1) {
      fetchData();
    } else if (!result.data.acknowledged) {
      alert("Data not found");
    } else if (result.data.modifiedCount === 0) {
      alert("make any changes");
    } else {
      alert("some thing went wrong!!!!");
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const productOfUser = useCallback(
    (userId, name) => {
      const userProducts = data.products.filter(
        (product) => product.userId === userId
      );
      setData((prevData) => ({
        ...prevData,
        userProduct: userProducts,
        userName: name,
      }));
    },
    [data.products]
  );

  const renderBtn = useCallback(
    (info, id, name, email, password) => (
      <>
        <button
          className="td-button"
          type="button"
          onClick={() => deleteUser(info, id)}
        >
          Delete
        </button>
        {info === "user" ? (
          <button
            className="td-button"
            onClick={() => updateData(info, id, name, email, password)}
          >
            Update
          </button>
        ) : (
          <button className="td-button">
            <Link to={`/update/${id}`}>Update</Link>
          </button>
        )}
      </>
    ),
    [deleteUser, updateData]
  );

  const mappedUsers = data.users
    .filter((val) => val.name && val.email && val.password)
    .map((val, i) => (
      <tr key={val._id}>
        <td onClick={() => productOfUser(val._id, val.name)}>{i + 1}</td>
        <td>{val.name}</td>
        <td>{val.email}</td>
        <td>{val.password}</td>
        <td>
          {val.email !== "re" &&
            val.password !== "re" &&
            renderBtn("user", val._id, val.name, val.email, val.password)}
        </td>
      </tr>
    ));

  const mappedProducts = data.products
    .filter(
      (val) =>
        val.category && val.company && val.name && val.price && val.userId
    )
    .map((val, i) => (
      <tr key={i + 1}>
        <td>{i + 1}</td>
        <td>{val.category}</td>
        <td>{val.company}</td>
        <td>{val.name}</td>
        <td>{val.price}</td>
        <td>{renderBtn("product", val._id)}</td>
      </tr>
    ));

  const mappedUserProducts = data.userProduct
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
        <td>{renderBtn("product", val._id)}</td>
      </tr>
    ));

    const CanclePopup=()=>{
      setBoolVal(preval=>({
        ...preval,
        isOpen: false
      }))
    }

  useEffect(() => {
    fetchData();
  }, [data.userEmail, data.userName, data.userPassword]);
  console.log("admin");
  return (
    <>
      {data.users.length > 0 ? (
        <div className="table-container">
          <h3>User Info</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>{mappedUsers}</tbody>
          </table>
          <h3>Product Info</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Category</th>
                <th>Company</th>
                <th>Name</th>
                <th>Price</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>{mappedProducts}</tbody>
          </table>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      {data.userProduct.length > 0 ? (
        <>
          <h2 className="title">{`${data.userName} User Info`}</h2>
          <table className="my-table">
            <thead>
              <tr>
                <th>Sr.No</th>
                <th>Category</th>
                <th>Company</th>
                <th>Name</th>
                <th>Price</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>{mappedUserProducts}</tbody>
          </table>
        </>
      ) : (
        data.userName && (
          <p style={{ paddingLeft: "43%", paddingTop: "7%", color: "red" }}>
            {data.userName} has not added any products.
          </p>
        )
      )}
      {boolVal.isOpen && (
        <PopupForm
          isOpen={boolVal.isOpen}
          saveUpdatedData={saveUpdatedData}
          data={data}
          handleChange={handleChange}
          CanclePopup={CanclePopup}
        />
      )}
    </>
  );
};

export default Admin;
