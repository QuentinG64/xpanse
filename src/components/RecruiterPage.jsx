import React from "react";
import CardRecruiter from "./CardRecruiter";
import dataAstros from "../data/dataAstros";

const RecruiterPage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen bg-cover bg-[url('../assets/images/recruiterBackground.png')] bg-scroll">
      <div className="flex flex-wrap h-screen pt-24 justify-center items-center gap-5 w-1/2">
        {dataAstros
          .map((astro, index) => <CardRecruiter key={index} {...astro} />)
          .slice(0, 6)}
      </div>
    </div>
  );
};

export default RecruiterPage;
