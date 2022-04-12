import React from "react";

const RadioBox = () => {
  return (
    <div className>
      <input type="radio" value="All" name="social" /> All <br />
      <input type="radio" value="Twitter" name="social" /> Twittter <br />
      <input type="radio" value="Instagram" name="social" /> Instagram
    </div>
  );
};

export default RadioBox;
