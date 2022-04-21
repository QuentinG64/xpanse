import React from "react";

const Checkbox = (id, title, checked) => {
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        className="form-checkbox h-4 w-4 accent-secondary-1"
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};

export default Checkbox;
