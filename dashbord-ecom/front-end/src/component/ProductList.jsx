import React, { useEffect, useState } from 'react';
import "../styles/ProductList.css";

const ProductList = () => {
    const [products,setProducts] = useState([])

    useEffect(  ()=>{
        getProduct()
        
    })

    const getProduct = async () =>{
        let result = await fetch(`http://127.0.0.1:5000/products`)
        result = await result.json()
        console.log(result);
        setProducts(result)
    }

  return (
    <div className='ProductList'>
      <h1>Product List</h1>
      <table className="dynamic-table">
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>name</th>
          <th>price</th>
          <th>company</th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>
        {products.map((row,index) => (
          <tr key={row.id}>
            <td>{index+1}</td>
            <td>{row.name}</td>
            <td>{row.price}</td>
            <td>{row.company}</td>
            <td>{row.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default ProductList;
