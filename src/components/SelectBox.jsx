import React from "react";

const SelectBox = () => {
  return (
    <div>
      <select name="agencies-type" id="agency-select" className="rounded-sm">
        <option value="">--Select a type of agency--</option>
        <option value="None">None</option>
        <option value="Government">Government</option>
        <option value="Multinational">Multinational</option>
        <option value="Commercial">Commercial</option>
        <option value="Educational">Educational</option>
        <option value="Private">Private</option>
        <option value="Unknown">Unknown</option>
      </select>
    </div>
  );
};

export default SelectBox;
