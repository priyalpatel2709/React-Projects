import React, { useState, useEffect } from "react";
import "../style/AdduserInfo.css";
import { Link } from "react-router-dom";
import {
  AddUserInfo,
  fetchUser,
  DeleteUSer,
  updateUser,
} from "../services/subscriptionService";

const AdduserInfo = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    description: "",
    id: "",
    isNameEmpty: false,
    errMsg: "",
    AllusersList: [],
    isUpdate: false,
  });

  const handleClick = async () => {
    if (userInfo.name.trim() === "") {
      setUserInfo((preval) => ({
        ...preval,
        isNameEmpty: true,
        errMsg: "Name is require*",
      }));
    } else {
      let user = {
        name: userInfo.name,
        description: userInfo.description,
      };

      const AddUser = await AddUserInfo(user);
      console.log("AddUser", AddUser);
      if (AddUser.result) {
        console.log(" i am");
        setUserInfo((preval) => ({
          ...preval,
          isNameEmpty: true,
          errMsg: AddUser.result,
        }));
      } else {
        fetchUsers();
        setUserInfo({
          isNameEmpty: false,
          name: "",
          description: "",
          errMsg: "",
        });
      }
    }
  };

  const fetchUsers = async () => {
    try {
      let users = await fetchUser();
      setUserInfo((preval) => ({
        ...preval,
        AllusersList: users,
      }));
      console.log("user", users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    let deleteuser = await DeleteUSer(id);
    console.log("deleteuser", deleteuser);
    fetchUsers();
  };

  const updateuser = (id, name, description) => {
    setUserInfo((preval) => ({
      ...preval,
      name: name,
      description: description,
      id: id,
      isUpdate: true,
    }));
    console.log(id);
  };

  const AllusrsinfoTable = (
    <>
      <table>
        <thead>
          <th>Sr.No</th>
          <th>Name</th>
          <th>description</th>
          <th>Opration</th>
        </thead>
        <tbody>
          {userInfo.AllusersList?.map((user, index) => (
            <>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.description}</td>
                <td>
                  <button
                    style={{ marginRight: "5px" }}
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() =>
                      updateuser(user._id, user.name, user.description)
                    }
                  >
                    Update
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );

  const saveUpdate = async () => {
    let updateuserinfo = {
      name: userInfo.name,
      description: userInfo.description,
    };

    console.log("from save", userInfo.id);
    let updateuser = await updateUser(userInfo.id, updateuserinfo);
    console.log(updateuser);
    if (updateuser.modifiedCount === 1) {
      setUserInfo((preval) => ({
        ...preval,
        name: "",
        description: "",
        isUpdate: false,
        id: "",
      }));
      fetchUsers();
    } else {
      setUserInfo((preval) => ({
        ...preval,
        isNameEmpty: true,
        errMsg: "make any changes",
      }));
    }
  };

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
            value={userInfo.name}
            onChange={(e) =>
              setUserInfo((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
            required
          />
          {userInfo.isNameEmpty && (
            <span style={{ color: "red" }}> {userInfo.errMsg}</span>
          )}
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
          {userInfo.isUpdate ? (
            <button onClick={() => saveUpdate()}>Save Update</button>
          ) : (
            <button onClick={handleClick}>Add User</button>
          )}
          <span>
            Go To <Link to="/">New Subscribers</Link>
          </span>
        </div>
      </div>
      {AllusrsinfoTable}
    </>
  );
};

export default AdduserInfo;
