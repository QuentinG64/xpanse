import React from "react";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox";

const missions = [
  "Go for launch", // (1)
  "To Be Determined", // (2)
  "Launch Successful", // (3)
  "Launch Failure", // (4)
  "On Hold", // (5)
  "Launch In Flight", // (6)
  "Launch was a Partial Failure", // (7)
  "To Be Confirmed", // (8)
];

const MobileFilterFreelance = ({ status, setStatus, FilterOpened }) => {
  return (
    <div
      className={`border-2 rounded-xl h-auto w-[95%] mb-12 px-4 py-6 lg:mx-2 lg:mt-5 lg:static ${FilterOpened} overflow-scroll hidden`}
    >
      <h1 className="font-title text-main-2 text-lg">
        SELECT YOUR NEXT MISSION
      </h1>
      <div className="mt-7">
        <h2 className="font-title text-main-2 text-sm">FILTER BY MISSION</h2>
      </div>
      <div className="text-main-2 font-primary text-sm py-1">
        <div className="text-main-2 font-primary text-sm py-1">
          {missions.map((mission, index) => (
            <Checkbox
              key={index}
              value={index + 1}
              status={status}
              mission={mission}
              type="radio"
              setStatus={setStatus}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

MobileFilterFreelance.propTypes = {
  status: PropTypes.number.isRequired,
  setStatus: PropTypes.func.isRequired,
  FilterOpened: PropTypes.string.isRequired,
};

export default MobileFilterFreelance;
