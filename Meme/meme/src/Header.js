import React from "react";
import memeimg from './images/troll-face.png'

const Header = () => {
  return (
    <>
        <div className="header" >
        <img 
                src={memeimg} 
                className="header--image"
                alt="img"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </div>
    </>
  );
};

export default Header;
