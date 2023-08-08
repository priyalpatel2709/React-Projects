import React, { useState, useEffect } from "react";
import "../style/AdduserInfo.css";
import { Link } from "react-router-dom";
import {
  AddUserInfo,
  fetchUser,
  DeleteUSer,
  updateUser,
} from "../services/subscriptionService"; // Update the import statements to match your service file

const AdduserInfo = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    description: "",
    id: "",
    MaxSlots: Number,
    date: [],
  });

  const [additionalDates, setAdditionalDates] = useState([]);

  const [userStatus, setUserStatus] = useState({
    isNameEmpty: false,
    errMsg: "",
    isUpdate: false,
    AllusersList: [],
  });

  const handleClick = async () => {
    if (userDetails.name.trim() === "" || userDetails.date.length === 0) {
      setUserStatus((prevState) => ({
        ...prevState,
        isNameEmpty: true,
        errMsg: "Name and date are required*",
      }));
    } else {
      let user = {
        name: userDetails.name,
        description: userDetails.description,
        MaxSlots: userDetails.MaxSlots,
        date: [...userDetails.date, ...additionalDates], // Combine existing and additional dates
      };
      const AddNewUser = await AddUserInfo(user);
      if (AddNewUser.result) {
        setUserStatus((prevState) => ({
          ...prevState,
          isNameEmpty: true,
          errMsg: AddNewUser.result,
        }));
      } else {
        fetchAllUsers();
        setUserDetails({
          name: "",
          description: "",
          id: "",
          MaxSlots: 0,
          date: [], // Clear the selected dates after booking
        });
        setAdditionalDates([]); // Clear additional dates
        setUserStatus((prevState) => ({
          ...prevState,
          isNameEmpty: false,
          errMsg: "",
        }));
      }
    }
  };

  const fetchAllUsers = async () => {
    try {
      let users = await fetchUser();
      setUserStatus((prevState) => ({
        ...prevState,
        AllusersList: users,
      }));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const handleDeleteUser = async (id) => {
    let deleteResult = await DeleteUSer(id);
    console.log(deleteResult);
    if (deleteResult.status === 203) {
      console.log(deleteResult.data.result, "deleteResult.data.result");
      setUserStatus((preval) => ({
        ...preval,
        errMsg: deleteResult.data.result,
        isNameEmpty: true,
      }));
    } else {
      alert(deleteResult.data.result);
      fetchAllUsers();
      setUserStatus((preval) => ({
        ...preval,
        errMsg: "",
        isNameEmpty: false,
      }));
    }
  };

  const updateUserDetails = (id, name, description, MaxSlots) => {
    setUserDetails({
      name: name,
      description: description,
      id: id,
      MaxSlots: MaxSlots,
    });
    setUserStatus((prevState) => ({
      ...prevState,
      isUpdate: true,
    }));
  };

  const saveUpdate = async () => {
    let updateUserInfo = {
      name: userDetails.name,
      description: userDetails.description,
      MaxSlots: userDetails.MaxSlots,
    };

    console.log("updateUserInfo", updateUserInfo);

    let updateResult = await updateUser(userDetails.id, updateUserInfo);
    console.log("updateResult", updateResult);
    if (updateResult.modifiedCount === 1) {
      setUserDetails({
        name: "",
        description: "",
        id: "",
        MaxSlots: 0,
      });
      setUserStatus((prevState) => ({
        ...prevState,
        isUpdate: false,
        errMsg: "",
      }));
      fetchAllUsers();
    } else {
      setUserStatus((prevState) => ({
        ...prevState,
        isNameEmpty: true,
        errMsg: "Make any changes",
      }));
    }
  };

  const AllUsersInfoTable = (
    <div className="table-container">
      <table >
        <thead>
          <th>Sr.No</th>
          <th>Name</th>
          <th>Description</th>
          <th>Max Slots</th>
          <th>Operation</th>
        </thead>
        <tbody>
          {userStatus.AllusersList?.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              {user.description === "" ? (
                <td>-</td>
              ) : (
                <td>{user.description}</td>
              )}
              <td>{user.MaxSlots}</td>
              <td>
                <button
                  style={{
                    marginRight: "5px",
                    backgroundColor: "red",
                    color: "black",
                  }}
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Delete
                </button>
                <button
                  style={{ marginRight: "5px", color: "black" }}
                  onClick={() =>
                    updateUserDetails(
                      user._id,
                      user.name,
                      user.description,
                      user.MaxSlots
                    )
                  }
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const handleGridDetailChange = (field, value) => {
    // Check if the selected date already exists in the array
    const dateExists = userDetails.date.includes(value);

    if (dateExists) {
      // If the date exists, remove it from the array
      setUserDetails((prevUserDetails) => ({
        ...prevUserDetails,
        date: prevUserDetails.date.filter((date) => date !== value),
      }));
    } else {
      // If the date does not exist, add it to the array
      setUserDetails((prevUserDetails) => ({
        ...prevUserDetails,
        date: [...prevUserDetails.date, value],
      }));
    }
  };

  // console.log("userDetails", userDetails.date);

  const AddMoreDates = () => {
    console.log("when ?s");
    setAdditionalDates([...additionalDates, ""]);
  };

  const handleAdditionalDateChange = (index, value) => {
    // Update the additional date at the specified index
    const updatedDates = [...additionalDates];
    updatedDates[index] = value;
    setAdditionalDates(updatedDates);
  };

  // console.log('additionalDates',additionalDates);
  // console.log(userDetails.date,'userDetails');

  const oncancleUpdate = () =>{
    setUserDetails({
      name: '',
      description: '',
      id: '',
      MaxSlots: '',
    });
    setUserStatus((prevState) => ({
      ...prevState,
      isUpdate: false,
    }));
  }

  return (
    <>
      <div className="input-container">
        <div className="input-column">
          <h1>Add User Info Here</h1>
          <input
            autoComplete="off"
            placeholder="Name"
            name="name"
            type="text"
            value={userDetails.name}
            onChange={(e) =>
              setUserDetails((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
            required
          />
          {userStatus.isNameEmpty && (
            <span style={{ color: "red" }}>{userStatus.errMsg}</span>
          )}
          <input
            placeholder="Description"
            name="description"
            type="text"
            value={userDetails.description}
            onChange={(e) =>
              setUserDetails((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
          />
          <input
            placeholder="Max-Slot"
            name="MaxSlots"
            type="text"
            value={userDetails.MaxSlots}
            onChange={(e) =>
              setUserDetails((prevState) => ({
                ...prevState,
                MaxSlots: e.target.value,
              }))
            }
          />
          <label htmlFor={`date`}>Date:</label>
          <input
            type="date"
            id={`date`}
            value={userDetails.date}
            onChange={(e) => handleGridDetailChange("date", e.target.value)}
            required
          />
          {additionalDates.map((date, index) => (
            <input
              key={index}
              type="date"
              value={date}
              onChange={(e) =>
                handleAdditionalDateChange(index, e.target.value)
              }
              required
            />
          ))}
          {!userStatus.isUpdate ? (
            <button style={{ margin: "5px" }} onClick={AddMoreDates}>
              Add Dates
            </button>
          ) : (
            <button onClick={()=>oncancleUpdate()} style={{ margin: "5px",backgroundColor: "red",color: "black" }}>cancle</button>
          )}
          {userStatus.isUpdate ? (
            <button style={{color:'black'}} onClick={saveUpdate}>Save Update</button>
          ) : (
            <button onClick={handleClick}>Add User</button>
          )}
          <span>
            Go To <Link to="/">New Subscribers</Link>
          </span>
        </div>
      </div>
      {AllUsersInfoTable}
    </>
  );
};

export default AdduserInfo;
