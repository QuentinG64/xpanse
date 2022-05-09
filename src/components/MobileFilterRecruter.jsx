import React from "react";
import PropTypes from "prop-types";
import Checkbox from "./Checkbox";

const titles = [
  " Active",
  " Retired",
  " In-Training",
  " Lost In Flight",
  " Lost In Training",
  " Died While In Active Service",
  " Dismissed",
  " Resigned during Training",
  " Deceased",
];

const MobileFilterRecruter = ({ status, setStatus, FilterOpened }) => {
  return (
    <div
      className={`border-2 rounded-xl h-auto w-[95%] mb-12 px-4 py-6 lg:mx-2 lg:mt-5 lg:static ${FilterOpened} overflow-scroll hidden`}
    >
      <h1 className="font-title text-main-2 text-lg">
        SELECT YOUR NEXT PARTNER
      </h1>
      <div className="mt-7">
        <h2 className="font-title text-main-2 text-sm">
          FILTER BY PARTNERS STATUS
        </h2>
      </div>
      <div className="text-main-2 font-primary text-sm py-1">
        {titles.map((title, index) => (
          <Checkbox
            key={index}
            value={index + 1}
            status={status}
            title={title}
            type="radio"
            setStatus={setStatus}
          />
        ))}
      </div>
    </div>
  );
};

MobileFilterRecruter.propTypes = {
  status: PropTypes.number,
  setStatus: PropTypes.func.isRequired,
  FilterOpened: PropTypes.string.isRequired,
};

MobileFilterRecruter.defaultProps = {
  status: 0,
};

export default MobileFilterRecruter;
