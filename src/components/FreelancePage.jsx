import React from "react";
import CardFreelance from "./CardFreelance";
import dataAstros from "../data/dataAstros";
import FilterFreelance from "./FilterFreelance";

const FreelancePage = () => {
  return (
    <div className="h-screen w-screen">
      <div className="flex flex-col bg-fixed bg-cover bg-[url('../assets/images/FreelanceBackground.png')]">
        <div className="absolute mt-32">
          <FilterFreelance />
        </div>
        <div className="flex justify-center items-center ">
          <div className="flex flex-wrap bg-transparent pt-24 justify-end items-center gap-5 w-4/6">
            {dataAstros
              .map((astro, index) => <CardFreelance key={index} {...astro} />)
              .slice(0, 8)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancePage;
