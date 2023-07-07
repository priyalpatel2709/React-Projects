import React, { useState } from 'react';
import '../styles/PopupForm.css'
function PopupForm({isOpen,saveUpdatedData,data,handerlChange}) {
//   const [isOpen, setIsOpen] = useState(false);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data here
    // You can access the input values: input1, input2, input3
    // Perform any necessary actions with the data (e.g., send it to the server)
    // Reset the input values if needed
    setInput1('');
    setInput2('');
    setInput3('');
    saveUpdatedData()
    // Close the popup
    // setIsOpen(false);
  };
// console.log('----------->',data);
let {userEmail,userName,userPassword}= data
console.log("---------->",userName);
console.log("---------->",userEmail);
console.log("---------->",userPassword);
  return (
    <div>
      {/* <button onClick={() => setIsOpen(true)}>Open Form</button> */}
      {isOpen && (
        <div className="popup">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userName}
              onChange={(e) => setInput1(e.target.value)}
              placeholder="Input 1"
            />
            <input
              type="text"
              value={userEmail}
              onChange={(e) => setInput2(e.target.value)}
              placeholder="Input 2"
            />
            <input
              type="text"
              value={userPassword}
              onChange={(e) => setInput3(e.target.value)}
              placeholder="Input 3"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default React.memo(PopupForm);
