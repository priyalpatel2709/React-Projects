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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
      error: false,
    }));
  };

  const collectData = async () => {
    if (!values.name || !values.category || !values.company || !values.price) {
      setValues((prevValues) => ({
        ...prevValues,
        error: true,
      }));
      return;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch(`http://127.0.0.1:5000/add-product`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },

      body: JSON.stringify({
        name: values.name,
        price: values.price,
        category: values.category,
        company: values.company,
        userId: userId,
      }),
    });

    result = await result.json();
    // console.log(result.name);
    if (result.name) {
      localStorage.setItem("product", JSON.stringify(result));
      alert("Added Successfully");
      setValues({
        name: "",
        price: "",
        category: "",
        company: "",
        error: false,
      });
    }
  };

  return (
    <div className="container">
      <h1>Add Product</h1>
      <div className="input-container">
        <label className="input-label" htmlFor="productName">
          Name:
        </label>
        <input
          className="input-box"
          type="text"
          placeholder="Enter Name of Product"
          name="name"
          onChange={handleChange}
          value={values.name}
        />
        {values.error && !values.name && (
          <span className="err-span">Please enter a name</span>
        )}

        <label className="input-label" htmlFor="productPrice">
          Price:
        </label>
        <input
          className="input-box"
          type="text"
          placeholder="Enter the Price of Product"
          name="price"
          onChange={handleChange}
          value={values.price}
        />
        {values.error && !values.price && (
          <span className="err-span">Please enter a price</span>
        )}

        <label className="input-label" htmlFor="productCategory">
          Category:
        </label>
        <input
          className="input-box"
          type="text"
          placeholder="Enter the Category of Product"
          name="category"
          onChange={handleChange}
          value={values.category}
        />
        {values.error && !values.category && (
          <span className="err-span">Please enter a category</span>
        )}

        <label className="input-label" htmlFor="productCompany">
          Company:
        </label>
        <input
          className="input-box"
          type="text"
          placeholder="Enter the Company of Product"
          name="company"
          onChange={handleChange}
          value={values.company}
        />
        {values.error && !values.company && (
          <span className="err-span">Please enter a company</span>
        )}
      </div>
      <button className="add-btn" onClick={collectData} type="button">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
