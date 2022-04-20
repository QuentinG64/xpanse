import React from "react";

const Checkbox = (props) => {
  return (
    <div>
      <input
        type="radio"
        value={props.value}
        name="status"
        className="form-checkbox h-4 w-4 accent-secondary-1"
      />
      {props.title} <br />
    </div>
  );
};

export default Checkbox;
