import React, { useState } from "react";
import Checkbox from "./Checkbox";
import SelectBox from "./SelectBox";

const FilterRecruiter = () => {
  // const [checkedOne, setCheckedOne] = useState(false);
  // const handleChangeOne = () => {
  //   setCheckedOne(!checkedOne);
  // };

  // const [checkedTwo, setCheckedTwo] = useState(false);
  // const handleChangeTwo = () => {
  //   setCheckedTwo(!checkedTwo);
  // };
  return (
    <div className="flex flex-col border-2 rounded-xl h-96 px-4 py-2">
      <h1 className="font-title text-main-2 text-lg">
        SELECT YOUR NEXT PARTNER
      </h1>
      <div className="mt-3">
        <h2 className="font-title text-main-2 text-sm">
          FILTER BY PARTNERS'S STATUS
        </h2>
      </div>
      <div className="text-main-2 font-primary text-sm py-1">
        <Checkbox
          id="1"
          title=" Retired"
          // checked={checkedOne}
          // onChange={handleChangeOne}
        />
        <Checkbox
          title=" Active"
          id="2"
          // checked={checkedTwo}
          // onChange={handleChangeTwo}
        />

        <div className="mt-3">
          <h2 className="font-title text-main-2 text-sm py-1">
            FILTER BY AGENCIES
          </h2>
          <SelectBox />
        </div>
      </div>
    </div>
  );
};

export default FilterRecruiter;
