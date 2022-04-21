import React from "react";

const Checkbox = ({ value, title, status, setStatus }) => {
  return (
    <div>
      <input
        type="radio"
        name="status"
        className="form-checkbox h-4 w-4 accent-secondary-1"
        checked={status == value}
        onClick={() => {
          setStatus(value);
        }}
      />
      {title} <br />
    </div>
  );
};

export default Checkbox;
