import React from "react";
import "../styles/PopupForm.css";
function PopupForm({ isOpen, saveUpdatedData, data, handleChange,CanclePopup }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    saveUpdatedData();
  };

  let { userEmail, userName, userPassword } = data;
  return (
    <div>
      {isOpen && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userName}
              onChange={(e) => handleChange(e)}
              placeholder={userName}
              name="userName"
            />
            <input
              type="text"
              value={userEmail}
              onChange={(e) => handleChange(e)}
              placeholder={userEmail}
              name="userEmail"
            />
            <input
              type="text"
              value={userPassword}
              onChange={(e) => handleChange(e)}
              placeholder={userPassword}
              name="userPassword"
            />
            <div>
              <button type="submit">Submit</button>
              <button type="button" onClick={()=>CanclePopup()} >Cancle</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default React.memo(PopupForm);
