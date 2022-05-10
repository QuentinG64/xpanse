import React from "react";

const RadioBox = () => {
  return (
    <div>
      <input
        type="radio"
        value="All"
        name="social"
        className="form-checkbox h-4 w-4 accent-secondary-1"
      />
      All <br />
      <input
        type="radio"
        value="Twitter"
        name="social"
        className="form-checkbox h-4 w-4 accent-secondary-1"
      />
      Twitter <br />
      <input
        type="radio"
        value="Instagram"
        name="social"
        className="form-checkbox h-4 w-4 accent-secondary-1"
      />
      Instagram
    </div>
  );
};

export default RadioBox;
