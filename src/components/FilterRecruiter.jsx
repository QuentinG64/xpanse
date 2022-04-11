import React from "react";
import Checkbox from "./Checkbox";

const FilterRecruiter = () => {
  return (
    <div className="flex flex-col border-2 rounded-xl h-64">
      <h1 className="font-title text-main-2 text-lg">
        SELECT YOUR NEXT PARTNER
      </h1>
      <h2 className="font-title text-main-2 text-sm">
        FILTER BY PARTNER'S STATUS
      </h2>
      <div className="text-main-2 font-primary text-sm">
        <Checkbox title="Retired" />
        <Checkbox title="Active" />
      </div>
    </div>
  );
};

export default FilterRecruiter;
