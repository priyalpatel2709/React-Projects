import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import "../styles/UpdateProduct.css";
import axios from 'axios';

const UpdateProduct = () => {
  const { id } = useParams();
  let navigate = useNavigate()
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
        const response = await axios.get(`https://srever-ecomm.vercel.app/products/${id}`, 
        );
    
        const result = response.data;
        // console.log(result);
    
        if (response.status === 200) {
          setValues(result);
          localStorage.setItem('update', JSON.stringify(result));
        } else {
          console.error('Error:', result.error);
        }
      } catch (error) {
        alert(`Something went wrong, please try again later. ${error.message}`);
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
    let anyChance = JSON.parse(localStorage.getItem('update'));
    let checkAnyChanges = JSON.stringify(anyChance) === JSON.stringify(values);
  
    if (checkAnyChanges) {
      alert('Make any changes');
    } else {
      try {
        const response = await axios.put(`https://srever-ecomm.vercel.app/products/${id}`, {
          name: values.name,
          price: values.price,
          category: values.category,
          company: values.company,
        }, 
        );
  
        if (response.data) {
          alert('Changes added');
          navigate('/')
        }
      } catch (error) {
        alert(`Something went wrong, please try again later. ${error.message}`);
      }
    }
  };
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
