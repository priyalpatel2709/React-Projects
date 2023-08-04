import React from "react";

const DropDown = ({SelectslotName,UpdateSlotName}) => {
  return (
    <div>
      <select value={SelectslotName} onChange={(e) => UpdateSlotName(e)}>
        <option value="USER">USER</option>
        <option value="USER1">USER1</option>
        <option value="USER2">USER2</option>
        <option value="USER3">USER3</option>
        <option value="USER4">USER4</option>
      </select>
    </div>
  );
};

export default DropDown;
