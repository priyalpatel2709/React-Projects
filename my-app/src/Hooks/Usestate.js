// import React, { useState } from "react";
// import MyVal from "./MyVal";

// const Usestate = () => {
//   const [name, setName] = useState('');
//   // const [data,setData] = useState(name);
//   const [istoggle,settoggle] = useState(false)

//   const clicked = (event) => {
//     event.preventDefault();
//     settoggle(true)
   
      
//   } 
//   const change = (e) => {
//     setName(e.target.value)
//   }
//   return (
//     <>
//     <form  onSubmit={clicked} >
//       <div>
//         <input
//           type="text"
//           value={name}
//           onChange={change}
//         />
//       </div>
      
//       <div>
//         <input type="submit"  value="Submit form"></input> <hr />
//       </div>
     
//      </form>
//      {/* <h1>{name}</h1> */}
//      <h1>{name}</h1>
//      {
//        (()=>{
//         if(istoggle===true){
//           return name
//         }
//        })()
//      }
//     </>
//   );
// };

// export default Usestate;
