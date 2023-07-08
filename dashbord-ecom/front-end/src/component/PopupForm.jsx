import React from "react";
import "../styles/PopupForm.css";
function PopupForm({
  isOpen,
  saveUpdatedData,
  data,
  handleChange,
  updatePassword,
  updateEmail,
  updateName,
}) {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    saveUpdatedData();
  };
  // console.log('----------->',data);
  let { userEmail, userName, userPassword } = data;
  console.log("---------->", userName);
  console.log("---------->", userEmail);
  console.log("---------->", userPassword);
  return (
    <div>
      {isOpen && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={updateName}
              onChange={(e) => handleChange(e)}
              placeholder="Input 1"
              name="updateName"
            />
            <input
              type="text"
              value={updateEmail}
              onChange={(e) => handleChange(e)}
              placeholder="Input 2"
              name="updateEmail"
            />
            <input
              type="text"
              value={updatePassword}
              onChange={(e) => handleChange(e)}
              placeholder="Input 3"
              name="updatePassword"
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default React.memo(PopupForm);
