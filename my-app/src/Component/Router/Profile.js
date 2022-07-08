import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Profile.css";

const Profile = () => {
  let { user } = useParams();

  const [username1, setUsername1] = useState(user);
  
  const [show, setShow] = useState(false);

  useEffect(() => {
    document.title = "profile";
  },[]);

  let go = useNavigate();



  return (
    <div>
      {
        show ? <h3> {user} work in drevol . </h3> : null
      }
      <hr />
      <select
        className="mx-5"
        defaultValue='don'
        onChange={(e) => setUsername1(e.target.value)}
      >
        <option  value='select_name' > select-name </option>
        <option  value='jaya'>jaya</option>
        <option  value='maya'>maya</option>
        <option  value='chaya'>chaya</option>
        <option  value='taya'>taya</option>
        <option  value='sen'>sen</option>
      </select> 
      <button
        type="button"
        className="btn btn-primary mx-5"
        onClick={() => {
          go(`/profile/${username1}`);
          console.log('profiles');
          setUsername1(username1)
          setShow(true)
      }}>show profile</button>         
        
      
      <hr />
   
    </div>

    // </div>
  );
};

export default Profile;
