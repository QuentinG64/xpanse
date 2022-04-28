import React from "react";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox";
import SelectBoxFreelance from "./SelectBoxFreelance";
import ModalDate from "./ModalDate";
import SelectBoxRocket from "./SelectBoxRocket";

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

const FilterFreelance = ({ status, setStatus }) => {
  return (
    <div className="border-2 rounded-xl h-auto w-[25%] mb-12 px-4 py-2 fixed overflow-scroll">
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
        <div className="mt-7">
          <h2 className="font-title text-main-2 text-sm py-1">
            FILTER BY AGENCY
          </h2>
          <SelectBoxFreelance />
        </div>
        <div className="mt-7">
          <h2 className="font-title text-main-2 text-sm py-1">
            FILTER BY ROCKET
          </h2>
          <SelectBoxRocket />
        </div>
        <div className="mt-7">
          <h2 className="font-title text-main-2 text-sm py-1">
            FILTER BY DATE
          </h2>
          <ModalDate />
        </div>
      </div>
    </div>
  );
};

FilterFreelance.propTypes = {
  status: PropTypes.number.isRequired,
  setStatus: PropTypes.func.isRequired,
};

export default FilterFreelance;
