import React,{useEffect,useState} from "react";
import axios from "axios";
// import { useEffect } from "react";

const Admin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  });

  let getData = async () => {
    let result = await axios.get(`http://127.0.0.1:5000/admin`);
    let data = result.data;
    console.log('====================================');
    console.log(data);
    // console.log(result);
    console.log('====================================');
    // setData(data);
  };
//   console.log('====================================');
//   console.log(data);
//   console.log('====================================');
  return (
    <div>
      {/* {data.map((e) => {
        <div>{e}</div>;
      })} */}
      hi
    </div>
  );
};

export default Admin;
