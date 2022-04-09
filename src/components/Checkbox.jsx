import React from "react";

const Checkbox = (props) => {
  return (
    <div>
      <input
        id={props.id}
        type="checkbox"
        name={props.name}
        onChange={props.handleChange}
        checked={props.checked}
      />
      <label htmlFor={props.id}>{props.title}</label>
    </div>
  );
};

export default Checkbox;
