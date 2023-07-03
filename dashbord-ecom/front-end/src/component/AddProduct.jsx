import React, { useState } from "react";

const AddProduct = () => {
  const [values, setValues] = useState({
    name: "",
    price: "",
    category: "",
    company: "",
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

  

  const collectData = async () =>{
    console.log(values.name);
    let result = await fetch(`http://127.0.0.1:5000/add-product`,{
        method :"post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: values.name,
            price: values.price,
            category: values.category,
            company: values.company,
          }),
    })
    result = await result.json()
    console.log(result);
    
  }

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
          />
          <input
            className="input-box"
            type="text"
            placeholder="Enter the Price of Product"
            name="price"
            onChange={handelChange}
          />
          <input
            className="input-box"
            type="text"
            placeholder="Enter the Category of Product"
            name="category"
            onChange={handelChange}
          />
          <input
            className="input-box"
            type="text"
            placeholder="Enter the Company of Product"
            name="company"
            onChange={handelChange}
          />
        </div>
        <button
          // style={{ marginBottom: "10px" }}
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
