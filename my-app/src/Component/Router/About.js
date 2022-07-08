import React,{useEffect } from 'react'

const About = () => {
  useEffect(() => {
    //Update the document title using the browser API
    document.title = 'about';
    //  alert('about')
    console.log('about');
  });
  return (
    <div>
      <h1>i am about</h1>
    </div>
  )
}

export default About
