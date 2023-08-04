import React, { useEffect, useState } from "react";
import { fetchUser } from "../services/subscriptionService";

const DropDown = ({SelectslotName,UpdateSlotName}) => {
  const [data,setData] = useState([])
  const fetchUsers = async () => {
    try {
      let users = await fetchUser();
      setData(users);
      console.log('user',users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(()=>{
    fetchUsers();
  },[])

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
