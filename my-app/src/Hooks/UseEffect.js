import React,{useState,useEffect} from "react";
const UseEffect = () => {
    const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    console.log('cllicked');
  });

  return (
    <>
      <div className=" App-header App-link">
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
          
        </div>
      </div>
    </>
  );
};

export default UseEffect;
