import React from 'react'
import "./Message.css";


const Message = ({ user, message, classs }) => {
    if (user) {
        return (
            <div className={`messageBox ${classs}`}  >
                {`${user}: ${message}`}
            </div>
        )
    }
    else {


        return (
            <div className={`messageBox ${classs}`}>
                {`You: ${message}`}
            </div>
        )
    }
}

export default Message
// import React from 'react'

// const Message = ({message}) => { 
//   return (
//     <div>
//       <h1>{message}</h1>
//     </div>
//   )
// }

// export default Message
