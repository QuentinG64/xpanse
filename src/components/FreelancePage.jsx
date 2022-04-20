import React from "react";
import CardFreelance from "./CardFreelance";
import FilterFreelance from "./FilterFreelance";
import NavBar from "./NavBar";
// import dataMission from "../data/dataMission";
import axios from 'axios';
import { useState, useEffect } from "react";


const FreelancePage = () => {
  const [missions, setMissions] = useState([]);

  const getMissions = () => {
    axios
      .get(`https://ll.thespacedevs.com/2.2.0/launch/`)
      .then((res) => res.data.results)
      .then((data)=>{
        setMissions(data);
      })
          .catch((err) => console.log(err));
    };
   useEffect(() => {
    getMissions();
   }, []);
  return (
    <div className="h-screen w-screen">
      <NavBar />
      <div className="flex flex-col bg-fixed bg-cover bg-[url('../assets/images/FreelanceBackground.png')]">
        <div className="absolute mt-32">
          <FilterFreelance />
        </div>
         {/* {<button className="text-white z-50" onClick={() => { getMission() }}>get</button> } */}
        <div className="flex justify-center items-center ml-[30%] mr-[1%]">
          <div className="flex flex-wrap bg-transparent pt-24 pb-12 items-center gap-5">
            {missions.map((mission, index) => (
              <CardFreelance key={index} {...mission} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancePage;
