import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "../styles/Admin.css";
import PopupForm from "./PopupForm";

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

  const deleteProduct = useCallback(async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/admin/user-delete/${id}`, {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });

      setData((prevData) => ({
        ...prevData,
        products: prevData.products.filter((product) => product._id !== id),
      }));
    } catch (error) {
      alert(`Something went wrong, please try again later. ${error.message}`);
    }
  }, []);

  const updateData = useCallback((id, name, email, password) => {
    setBoolVal((prevVal) => ({ ...prevVal, isOpen: true }));
    setData((prevData) => ({
      ...prevData,
      userId: id,
      userName: name,
      userPassword: password,
      userEmail: email,
    }));
  }, []);

  const saveUpdatedData = useCallback(async () => {
    console.log("save clicked");
    setBoolVal((prevVal) => ({ ...prevVal, isOpen: false }));

    let result = await axios.put(
      `http://127.0.0.1:5000/admin/user-update/${data.userId}`,
      {
        name: data.updateName,
        email: data.updateEmail,
        password: data.updatePassword,
      },
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );

    if (result.data) {
      setData((prevData) => ({
        ...prevData,
        updateName: "",
        updateEmail: "",
        updatePassword: "",
      }));
    }

    console.log("name", data.updateName);
    console.log("email", data.updateEmail);
    console.log("passwrd", data.updatePassword);
    console.log("userId", data.userId);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
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

    fetchData();
  }, [data.updateEmail, data.updateName, data.updatePassword]);

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
    (id, name, email, password) => (
      <>
        <button
          className="td-button"
          type="button"
          onClick={() => deleteProduct(id)}
        >
          Delete
        </button>
        <button
          className="td-button"
          onClick={() => updateData(id, name, email, password)}
        >
          Update
        </button>
      </>
    ),
    [deleteProduct, updateData]
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
            renderBtn(val._id, val.name, val.email, val.password)}
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
        <td>{renderBtn()}</td>
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
        <td>{renderBtn()}</td>
      </tr>
    ));
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
          updatePassword={data.updatePassword}
          updateEmail={data.updateEmail}
          updateName={data.updateName}
        />
      )}
    </>
  );
};

export default Admin;
