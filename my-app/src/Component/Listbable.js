import React, { useEffect, useState } from "react";

const Listbable = () => {
  const [retype, setRetype] = useState("");
  const [items, setItems] = useState([]);
  
  console.log("render");

useEffect(() => {
  console.log('hey');
  },[]);
  return (
    <div className="App">
      <div className="mt-4">
        <button className="mx-1" onClick={() => setRetype("posts")}>
          posts
        </button>
        <button className="mx-1" onClick={() => setRetype("users")}>
          users
        </button>
        <button className="mx-1" onClick={() => setRetype("comments")}>
          comments
        </button>
        <button className="mx-1" onClick={() => setRetype("todos")}>
        todos
        </button>
      </div>
      <div>{
        items.map((i)  => (
            <pre>{i.id}</pre>
        ))
        

      }</div>
    </div>
  );
};

export default Listbable;
