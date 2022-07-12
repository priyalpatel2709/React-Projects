import React, { useState } from "react";
// import Img from './Img'
import ImgData from './ImgData'

const Meme = () => {
const [Image,setImage]=useState(false)
const[allMemeImages,setAllMemeImages]=useState(ImgData)

  // const [memeImage,setMemeImage]=useState('')
  const[meme,setMeme]=useState({
    topText:'',
    bottomText:'',
    randomImage:''
  })

  const change=(e)=>{
    e.preventDefault()
    setMeme(preval=>({
      ...preval,
      [e.target.name] : e.target.value
    }))
  }

    const getimg =(e)=>{
        e.preventDefault()
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
        setMeme(preval=>({...preval,randomImage:url}))
        setImage(true)
    }
  return (
    <div>
      <form className="form">
        <input type="text" placeholder="Top text"    className="form--input" name='topText' value={meme.topText}       onChange={change}/>
        <input type="text" placeholder="Bottom text" className="form--input" name='bottomText' value={meme.bottomText} onChange={change}/>
        <button className="form--button" onClick={getimg}>Get a new meme image 🖼</button>
      </form>
      <div className="meme">
     { Image  &&   <img src={meme.randomImage} alt="sorry" />  }
        <h2 className="meme--text top">{meme.topText}</h2>
         <h2 className="meme--text bottom">{meme.bottomText}</h2> 
      </div>
      
      
    </div>
  );
};

export default Meme;
