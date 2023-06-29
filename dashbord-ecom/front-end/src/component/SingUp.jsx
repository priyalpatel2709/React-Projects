import React,{useState} from "react";

const SingUp = () => {
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')

    const collectData =()=>{
        console.log(`
        name:-${name}
        password:-${password}
        email:-${email} `);     
    }

  return (

    <div>
      <h1>Sing Up</h1>
      <div>
        <input
          className="input-box"
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
        <input
          className="input-box"
          type="text"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <input
          className="input-box"
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        
      </div>
      <button style={{marginBottom: '10px'}} onClick={collectData} type="button">Sing Up</button>
    </div>
  );
};

export default SingUp;
