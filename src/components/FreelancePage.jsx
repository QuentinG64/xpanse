import React from "react";
import CardFreelance from "./CardFreelance";
import FilterFreelance from "./FilterFreelance";
import NavBar from "./NavBar";
import dataMission from "../data/dataMission";

const FreelancePage = () => {
  return (
    <div className="h-screen w-screen">
      <NavBar />
      <div className="flex flex-col bg-fixed bg-cover bg-[url('../assets/images/FreelanceBackground.png')] h-full w-full">
        <div className="absolute mt-32">
          <FilterFreelance />
        </div>
        <div className="flex justify-center items-center ml-[30%] mr-[1%]">
          <div className="flex flex-wrap bg-transparent pt-24 pb-12 items-center gap-5">
            {dataMission.map((data, index) => (
              <CardFreelance key={index} {...data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancePage;
