import React, { useState } from "react";
import Checkbox from "./Checkbox";
import RadioBox from "./RadioBox";
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
    <div className="border-2 rounded-xl h-auto px-4 py-2">
      <h1 className="font-title text-main-2 text-lg">
        SELECT YOUR NEXT PARTNER
      </h1>
      <div className="mt-7">
        <h2 className="font-title text-main-2 text-sm">
          FILTER BY PARTNERS'S STATUS
        </h2>
      </div>
      <div className="text-main-2 font-primary text-sm py-1">
        <Checkbox id="1" title=" Active" />
        <Checkbox id="2" title=" Retired" />
        <Checkbox id="3" title=" In-training" />
        <Checkbox id="4" title=" Lost In Flight" />
        <Checkbox id="5" title=" Lost In Training" />
        <Checkbox id="6" title=" Died While In Active Service" />
        <Checkbox id="7" title=" Dismissed" />
        <Checkbox id="8" title=" Resigned during Training" />
        <Checkbox id="9" title=" Deceased" />

        <div className="mt-7">
          <h2 className="font-title text-main-2 text-sm py-1">
            FILTER BY TYPE OF AGENCY
          </h2>
          <SelectBox />
        </div>
        <div className="mt-7">
          <h2 className="font-title text-main-2 text-sm py-1">
            FILTER BY SOCIAL NETWORK
          </h2>
          <RadioBox />
        </div>
      </div>
    </div>
  );
};

export default FilterRecruiter;
