import React, { useEffect, useState } from "react";
import CardRecruiter from "./CardRecruiter";
import dataAstros from "../data/dataAstros";
import FilterRecruiter from "./FilterRecruiter";
import NavBar from "./NavBar";
import axios from "axios";

const RecruiterPage = () => {
  const [astros, setAstros] = useState([]);

  const getAstro = () => {
    axios
      .get(`https://ll.thespacedevs.com/2.2.0/astronaut/`)
      .then((res) => res.data.results)
      .then((data) => {
        setAstros(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAstro();
  }, []);

  return (
    <div className="h-screen w-screen">
      <NavBar />
      <div className="flex flex-col bg-cover bg-[url('../assets/images/recruiterBackground.png')] bg-fixed h-screen">
        <div className="absolute mt-32">
          <FilterRecruiter />
        </div>
        <div className="flex justify-center items-center ">
          {/* <button className="text-white z-50" onClick={() => { getAstro() }}>get</button> */}
          <div className="flex flex-wrap bg-transparent pt-24 justify-end items-center gap-5 w-4/6">
            {astros
              .map((astro, index) => <CardRecruiter key={index} {...astro} />)
              .slice(0, 8)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterPage;
