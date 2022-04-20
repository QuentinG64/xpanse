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
    <div className="border-2 rounded-xl h-auto px-4 py-2 fixed">
      <h1 className="font-title text-main-2 text-lg">
        SELECT YOUR NEXT PARTNER
      </h1>
      <div className="mt-7">
        <h2 className="font-title text-main-2 text-sm">
          FILTER BY PARTNERS'S STATUS
        </h2>
      </div>
      <div className="text-main-2 font-primary text-sm py-1">
        <Checkbox value="1" title=" Active" type="radio" />
        <Checkbox value="2" title=" Retired" type="radio" />
        <Checkbox value="3" title=" In-training" type="radio" />
        <Checkbox value="4" title=" Lost In Flight" type="radio" />
        <Checkbox value="5" title=" Lost In Training" type="radio" />
        <Checkbox
          value="6"
          title=" Died While In Active Service"
          type="radio"
        />
        <Checkbox value="7" title=" Dismissed" type="radio" />
        <Checkbox value="8" title=" Resigned during Training" type="radio" />
        <Checkbox value="9" title=" Deceased" type="radio" />

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
