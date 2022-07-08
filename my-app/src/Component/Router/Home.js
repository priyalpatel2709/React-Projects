import React,{useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    //Update the document title using the browser API
    document.title = 'home';
    //  alert('home')
    console.log('HOME');
  });
  return (
    <div>
      <h1>i am home page</h1>
    </div>
  )
}

export default Home
