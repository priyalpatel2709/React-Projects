import React, { useEffect, useState } from "react";
import "./Table.css";

const Table = (props) => {
  const [mdata, setMdata] = useState([]);

  useEffect(() => {
    setMdata(props.mydata);
  }, [props]);
  

  const db = (i) => {
    if (window.confirm('Are you sure you wish to delete this item?')) this.onCancel()
    const rows = [...mdata];
    rows.splice(i, 1);
    // setMdata(rows);
    props.ddata(rows)
  };
  const update = (d1, i) => {
    console.log("updted");
    props.udata(d1);
    console.log(d1);
    
  };


  return (
    <>
      <div className="t1">
        <table className="t1">
          <thead>
            <th>Sr.no</th>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Action</th>
          </thead>
          <tbody>
            {mdata?.map((d1, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{d1.id}</td>
                  <td>{d1.title}</td>
                  <td>{d1.description}</td>
                  <td>
                    <button onClick={() => update(d1)}>update</button>
                    <button onClick={(e) => db(i)}>delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
