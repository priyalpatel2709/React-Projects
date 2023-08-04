import React, { useEffect, useState } from "react";
import { fetchUser } from "../services/subscriptionService";

const DropDown = ({SelectslotName,UpdateSlotName}) => {
  const [data,setData] = useState([])


  const fetchUsers = async () => {
    try {
      let users = await fetchUser();
      setData(users);
    } catch (error) {
      // Handle any error that occurs during data fetching
      console.error("Error fetching users:", error);
    }
  };

  useEffect(()=>{
    fetchUsers();
  },[])

  // console.log(data);
  // const usersName = data?.map((user) => (
  //   <select key={user._id} value={user.name} onChange={(e) => UpdateSlotName(e)}>
  //     <option value={user.name}>{user.name}</option>
  //   </select>
  // ));

  const usersName = (
    <select onChange={(e) => UpdateSlotName(e)}>
      {data?.map((user) => (
        <option key={user._id} value={user.name}>
          {user.name}
        </option>
      ))}
    </select>
  );
  return (
    <div>
      {usersName}
    </div>
  );
};

export default DropDown;
