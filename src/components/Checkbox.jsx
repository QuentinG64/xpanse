import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ value, title, mission, location, status, setStatus }) => {
  return (
    <div>
      <input
        type="radio"
        name="status"
        className="form-checkbox h-4 w-4 accent-secondary-1"
        checked={status === value}
        onChange={() => {
          setStatus(value);
        }}
      />
      {title}
      {location}
      {mission}
      <br />
    </div>
  );
};

Checkbox.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  mission: PropTypes.string,
  location: PropTypes.string,
  status: PropTypes.number,
  setStatus: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  mission: "",
  location: "",
  status: "",
};

export default Checkbox;
