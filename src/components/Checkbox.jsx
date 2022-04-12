import React from "react";

const Checkbox = (props) => {
  return (
    <div>
      <input
        id={props.id}
        type="checkbox"
        checked={props.checked}
        className="form-checkbox h-4 w-4 accent-secondary-1"
      />
      <label htmlFor={props.id}>{props.title}</label>
    </div>
  );
};

export default Checkbox;
