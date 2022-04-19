import React, { useState } from "react";
import Checkbox from "./Checkbox";
import RadioBox from "./RadioBox";
import SelectBoxFreelance from "./SelectBox";

const FilterFreelance = () => {
  // const [checkedOne, setCheckedOne] = useState(false);
  // const handleChangeOne = () => {
  //   setCheckedOne(!checkedOne);
  // };

  // const [checkedTwo, setCheckedTwo] = useState(false);
  // const handleChangeTwo = () => {
  //   setCheckedTwo(!checkedTwo);
  // };
  return (
    <div className="border-2 rounded-xl h-auto w-[22%] mb-12 px-4 py-2 fixed overflow-scroll">
      <h1 className="font-title text-main-2 text-lg">
        SELECT YOUR NEXT MISSION
      </h1>
      <div className="mt-7">
        <h2 className="font-title text-main-2 text-sm">FILTER BY LOCATION</h2>
      </div>
      <div className="text-main-2 font-primary text-sm py-1">
        <Checkbox id="1" title=" USA" />
        <Checkbox id="2" title=" France" />
        <Checkbox id="3" title=" Kazakhstan" />
        <Checkbox id="4" title=" Russia" />

        <div className="mt-7">
          <h2 className="font-title text-main-2 text-sm py-1">
            FILTER BY AGENCY
          </h2>
          <SelectBoxFreelance />
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

export default FilterFreelance;
