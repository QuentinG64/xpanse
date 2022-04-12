import React from "react";

const SelectBox = () => {
  return (
    <div>
      <select name="agencies" id="agency-select" className="rounded-sm">
        <option value="">--Select an agency--</option>
        <option value="Canada">CAN</option>
        <option value="China">CHN</option>
        <option value="USA">US</option>
        <option value="ex1">blabla</option>
        <option value="ex2">blablou</option>
        <option value="ex3">blablu</option>
      </select>
    </div>
  );
};

export default SelectBox;
