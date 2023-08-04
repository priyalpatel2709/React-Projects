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
    MaxSlots: 0,
  });

  const [userStatus, setUserStatus] = useState({
    isNameEmpty: false,
    errMsg: "",
    isUpdate: false,
    AllusersList: [],
  });

  const handleClick = async () => {
    if (userDetails.name.trim() === "") {
      setUserStatus((prevState) => ({
        ...prevState,
        isNameEmpty: true,
        errMsg: "Name is required*",
      }));
    } else {
      let user = {
        name: userDetails.name,
        description: userDetails.description,
        MaxSlots: userDetails.MaxSlots,
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
        });
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
    if (deleteResult.deletedCount > 0) {
      fetchAllUsers();
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

    let updateResult = await updateUser(userDetails.id, updateUserInfo);
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
    <>
      <table>
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
              <td>{user.description}</td>
              <td>{user.MaxSlots}</td>
              <td>
                <button
                  style={{ marginRight: "5px" }}
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Delete
                </button>
                <button
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
    </>
  );

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
          {userStatus.isUpdate ? (
            <button onClick={saveUpdate}>Save Update</button>
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
