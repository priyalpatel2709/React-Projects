import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/UpdateProduct.css";

const UpdateProduct = () => {
  const { id } = useParams();
  //   console.log('paramName', id);

  const [values, setValues] = useState({
    name: "",
    price: "",
    category: "",
    company: "",
  });

  useEffect(() => {
    const getUpdatedData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/products/${id}`);
        const result = await response.json();
        // console.log(result);

        if (response.ok) {
          setValues(result);
          localStorage.setItem("update", JSON.stringify(result));
        } else {
          console.error("Error:", result.error);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getUpdatedData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const updateData = async () => {
    let anyChance = JSON.parse(localStorage.getItem("update"));
    let checkAnyChanges = JSON.stringify(anyChance) === JSON.stringify(values);

    if (checkAnyChanges) {
      alert("make any changes");
    } else {
      let result = await fetch(`http://127.0.0.1:5000/products/${id}`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          price: values.price,
          category: values.category,
          company: values.company,
        }),
      });
      result = await result.json();
      if (result) {
        alert("changes added");
      }
    }
  };

  //   console.log("data", values);

  return (
    <div>
      <div className="container">
        <h1>Update Product</h1>

        <div className="input-container">
          <label className="input-label">Name:</label>
          <input
            className="input-box"
            type="text"
            placeholder="Enter Name of Product"
            name="name"
            onChange={handleChange}
            value={values.name}
          />
          <label className="input-label">Price:</label>
          <input
            className="input-box"
            type="text"
            placeholder="Enter the Price of Product"
            name="price"
            onChange={handleChange}
            value={values.price}
          />
          <label className="input-label">Category:</label>
          <input
            className="input-box"
            type="text"
            placeholder="Enter the Category of Product"
            name="category"
            onChange={handleChange}
            value={values.category}
          />
          <label className="input-label">Company:</label>
          <input
            className="input-box"
            type="text"
            placeholder="Enter the Company of Product"
            name="company"
            onChange={handleChange}
            value={values.company}
          />
        </div>
        <button className="Add-btn" onClick={updateData} type="button">
          Update Product
        </button>
      </div>
    </div>
  );
};

export default UpdateProduct;
