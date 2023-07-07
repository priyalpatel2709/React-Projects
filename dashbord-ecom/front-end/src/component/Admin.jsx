import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "../styles/Admin.css";
import { Link } from "react-router-dom";
// import Usestate from "./../../../../my-app/src/Hooks/Usestate";

const Admin = () => {
  const [data, setData] = useState({
    users: [],
    products: [],
    userProcuct: [],
    userName: "",
    userId: "",
  });

  const [modify, setModify] = useState(true);

  const deleteProduct = useCallback(
    async (id) => {
      console.log("id------------------->", id);
      try {
        const response = await axios.delete(
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

        const result = response.data;
        // setProducts((prevProducts) =>
        //   prevProducts.filter((product) => product._id !== id)
        // );

        setData((prevData) => ({
          ...prevData,
          products: data.products.filter((product) => product._id !== id),
        }));
      } catch (error) {
        alert(`Something went wrong, please try again later. ${error.message}`);
      }
    },
    [data]
  );

  const updateData = async (id, name, email, password) => {
    // let anyChance = JSON.parse(localStorage.getItem('update'));
    console.log(id);
    setData((preval)=>({
      ...preval,
      userId:id
    }))
    console.log(data.users.filter((user) => user._id == id));
    // let checkAnyChanges = JSON.stringify(anyChance) === JSON.stringify(values);

    // if (checkAnyChanges) {
    //   alert('Make any changes');
    // } else {
    try {
      const response = await axios.put(
        `http://127.0.0.1:5000/admin/user-update/${id}`,
        {
          name: name,
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );

      if (response.data) {
        alert("Changes added");
        // navigate('/')
      }
    } catch (error) {
      alert(`Something went wrong, please try again later. ${error.message}`);
    }
    // }
  };

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
  }, [deleteProduct]);

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

  const renderBtn = (id) => {
    return (
      <>
        <button
          className="td-button"
          type="button"
          onClick={() => deleteProduct(id)}
        >
          Delete
        </button>
        <button className="td-button" onClick={() => updateData(id)}>
          <Link>Update</Link>
        </button>
      </>
    );
  };

  const mapprduser = data.users
    .filter((val) => val.name && val.email && val.password)
    .map((val, i) => (
      <tr key={val._id} onClick={() => productOfuser(val._id, val.name)}>
        <td>{i + 1}</td>
        <td>
          {(modify && data.userId === val._id) ? (
            val.name
          ) : (
            <input type="text" />
          )}
        </td>
        <td>{val.email}</td>
        <td>{val.password}</td>
        {val.name !== "re" && val.email !== "re" && val.password !== "re" ? (
          <td>
            <div
              onClick={(e) => {
                e.stopPropagation();
                setModify(false);
              }}
            >
              {renderBtn(val._id, val.name, val.email, val.password)}
            </div>
          </td>
        ) : (
          <td>ADMIN</td>
        )}
      </tr>
    ));

  const maapedProduct = data?.products
    .filter(
      (val, i) =>
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
        <td>{renderBtn()}</td>
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
              <th>Oprations</th>
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
              <th>Oprations</th>
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
                <th>Oprations</th>
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
