import React, { useState } from "react";
import "../styles/AddProduct.css";


const AddProduct = () => {
  const [values, setValues] = useState({
    name: "",
    price: "",
    category: "",
    company: "",
    error: false,
  });

  const handelChange = (e) => {
    const { name, value } = e.target;
    setValues((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const collectData = async () => {
    if (!values.name || !values.category || !values.company || !values.price) {
     
      setValues((preVal) => ({
        ...preVal,
        error: true,
      }));
      return false;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch(`http://127.0.0.1:5000/add-product`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.name,
        price: values.price,
        category: values.category,
        company: values.company,
        userId: userId,
      }),
    });
    result = await result.json();
    console.log(result);
    if (result) {
      localStorage.setItem("product", JSON.stringify(result));
      alert("Added Successfully");
      setValues({
        name: "",
        price: "",
        category: "",
        company: "",
      });
    }
  };

  return (
    <div>
      <div className="container">
        <h1>AddProduct</h1>
        <div className="input-container">
          <input
            className="input-box"
            type="text"
            placeholder="Enter Name of Product"
            name="name"
            onChange={handelChange}
            value={values.name}
          />
          {values.error && !values.name && <span className="err-span">enter name*</span>}
          <input
            className="input-box"
            type="text"
            placeholder="Enter the Price of Product"
            name="price"
            onChange={handelChange}
            value={values.price}
          />
          {values.error && !values.price && <span className="err-span">enter price*</span>}
          <input
            className="input-box"
            type="text"
            placeholder="Enter the Category of Product"
            name="category"
            onChange={handelChange}
            value={values.category}
          />
          {values.error && !values.category && <span className="err-span">enter category*</span>}
          <input
            className="input-box"
            type="text"
            placeholder="Enter the Company of Product"
            name="company"
            onChange={handelChange}
            value={values.company}
          />
          {values.error && !values.company && <span className="err-span">enter company*</span>}
        </div>
        <button
          // style={{ marginBottom: "10px" }}
          className="Add-btn"
          onClick={collectData}
          type="button"
        >
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
