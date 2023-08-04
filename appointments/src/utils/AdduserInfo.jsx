import React, { useState } from "react";
import "../style/AdduserInfo.css";
import { Link } from "react-router-dom";
import {AddUserInfo} from '../services/subscriptionService'

const AdduserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    description: "",
    isNameEmpty: false,
    errMsg: ""
  });

  const handleClick = async () => {
    if(userInfo.name.trim() === ""){
        setUserInfo(preval=>({
            ...preval,
            isNameEmpty : true,
            errMsg: "Name is require*"
        }))
    }else{

        let user = {
            name : userInfo.name,
            description : userInfo.description
        }

        const AddUser = await AddUserInfo(user)
        console.log("AddUser",AddUser);
        if(AddUser.result){
            console.log(' i am');
            setUserInfo(preval=>({
                ...preval,
                isNameEmpty : true,
                errMsg : AddUser.result
            }))
        }else{
            setUserInfo(preval=>({
                ...preval,
                isNameEmpty : false
            }))
        }

    }
    // console.log("Name:", userInfo.name);
    // console.log("Description:", userInfo.description);
  };

  // Function to check if the name input is required and empty
//   const isNameEmpty = userInfo.name.trim() === "";
  const isNameRequired = true; // Set this to true if the name is required

  return (
    <div className="input-container">
      <div className="input-column">
        <h1>Add User Info Here</h1>
        <input
          autoComplete="off"
          placeholder="Name"
          name="name"
          type="text"
          value={userInfo.name}
          onChange={(e) =>
            setUserInfo((prevState) => ({ ...prevState, name: e.target.value }))
          }
          required={isNameRequired} // Mark the input as required
        />
        {
            userInfo.isNameEmpty && <span style={{color:'red'}}> {userInfo.errMsg}</span>
        }
        <input
          placeholder="Description"
          name="description"
          type="text"
          value={userInfo.description}
          onChange={(e) =>
            setUserInfo((prevState) => ({
              ...prevState,
              description: e.target.value,
            }))
          }
        />
        <button onClick={handleClick}>Add User</button>
        <span>
          Go To <Link to="/">New Subscribers</Link>
        </span>
      </div>
    </div>
  );
};

export default AdduserInfo;
