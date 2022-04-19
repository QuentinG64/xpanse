import React from "react";

const SelectBoxRocket = () => {
  return (
    <div>
      <select name="rocket" id="rocket-select" className="rounded-sm">
        <option value="">--Select a rocket--</option>
        <option value="None">None</option>
        <option value="Falcon">Falcon</option>
        <option value="Soyouz">Soyouz</option>
        <option value="SLS">SLS</option>
      </select>
    </div>
  );
};

export default SelectBoxRocket;
