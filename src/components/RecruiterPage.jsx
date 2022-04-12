import React from "react";
import CardRecruiter from "./CardRecruiter";
import dataAstros from "../data/dataAstros";
import FilterRecruiter from "./FilterRecruiter";

const RecruiterPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen bg-cover bg-[url('../assets/images/recruiterBackground.png')] bg-fixed">
      <div className="absolute mt-32">
        <FilterRecruiter />
      </div>
      <div className="flex justify-center items-center w-4/6 ml-96 ">
        <div className="flex flex-wrap h-screen pt-24 justify-start items-cente gap-5 w-full">
          {dataAstros
            .map((astro, index) => <CardRecruiter key={index} {...astro} />)
            .slice(0, 6)}
        </div>
      </div>
    </div>
  );
};

export default RecruiterPage;
