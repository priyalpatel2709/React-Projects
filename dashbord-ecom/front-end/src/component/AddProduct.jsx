import React, { useState } from "react";
import "../styles/AddProduct.css";
import axios from "axios";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: "",
    price: "",
    category: "",
    company: "",
    error: false,
    image: "",
  });

  // const [img,setImg] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setValues({...values,image : file})
  };
  
  

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

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("price", values.price);
    formData.append("category", values.category);
    formData.append("company", values.company);
    formData.append("userId", JSON.parse(localStorage.getItem("user"))._id);
    formData.append("image", values.image);// Assuming you have an image file object (e.g., from an input field) called 'imageFile'

    try {
      const response = await axios.post(
        "https://srever-ecomm.vercel.app/add-product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", 
          },
        }
      );

      const result = response.data;
      if (result._id) {
        // localStorage.setItem("product", JSON.stringify(result));
        alert("Added Successfully");
        setValues({
          name: "",
          price: "",
          category: "",
          company: "",
          error: false,
        });
      } else {
        alert("Failed to add product.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
      console.error("Error:", error);
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
        <div>
        <input type="file" name="image" onChange={handleImageChange} />
        </div>
      </div>
      <button className="add-btn" onClick={collectData} type="button">
        Add Product
      </button>
      {/* <img src={values.image} alt="bla-bla-la"  width='100' height='100'/> */}
    </div>
  );
};

export default AddProduct;
