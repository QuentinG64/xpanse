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
      <div className="flex justify-center items-center ">
        <div className="flex flex-wrap h-screen pt-24 justify-center items-center gap-5 w-4/6">
          {dataAstros
            .map((astro, index) => <CardRecruiter key={index} {...astro} />)
            .slice(0, 8)}
        </div>
      </div>
    </div>
  );
};

export default RecruiterPage;
