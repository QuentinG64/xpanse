import React from "react";

const SelectBoxFreelance = () => {
  return (
    <div>
      <select name="agencies" id="agency-select" className="rounded-sm">
        <option value="">--Select an agency--</option>
        <option value="None">None</option>
        <option value="NASA">NASA</option>
        <option value="SPACE X">SPACE X</option>
        <option value="ROSCOMOS">ROSCOMOS</option>
      </select>
    </div>
  );
};

export default SelectBoxFreelance;
