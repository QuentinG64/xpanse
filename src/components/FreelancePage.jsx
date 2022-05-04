import React, { useState, useEffect } from "react";
import axios from "axios";
import CardFreelance from "./CardFreelance";
import FilterFreelance from "./FilterFreelance";
import NavBar from "./NavBar";
import MobileFilterFreelance from "./MobileFilterFreelance";
// import dataMission from "../data/dataMission";

const FreelancePage = () => {
  const [missions, setMissions] = useState([]);
  const [status, setStatus] = useState("");
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [FilterOpened, setFilterOpened] = useState("lg:block");

  // je créé une fonction pour changer la variable FilterOpened au clic du bouton filtre ou du bouton apply
  const handleIsFilterOpened = () => {
    setIsFilterOpened(!isFilterOpened);
  };

  // je crée une fonction pour changer la variable FilterOpened. Elle doit prendre selon qu'elle soit ouverte la valeur hidden ou block.
  const handleFilterOpenedValue = () => {
    isFilterOpened ? setFilterOpened("lg:block") : setFilterOpened("lg:hidden");
  };

  console.log(FilterOpened, isFilterOpened);

  const getMissions = () => {
    axios
      .get(`https://ll.thespacedevs.com/2.2.0/launch/?status=${status}`)
      .then((res) => res.data.results)
      .then((data) => {
        setMissions(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMissions();
  }, [status]);

  useEffect(() => {
    handleFilterOpenedValue();
  }, [isFilterOpened]);

  return (
    <div className="h-[100%] w-[100%]">
      <NavBar />
      <div className="flex flex-col bg-fixed bg-cover bg-freePage lg:items-center lg:justify-center">
        {/* Bouton "Filtrer" */}
        <div
          className="lg:h-10 lg:w-60 lg:bg-white/95 lg:mt-14 lg:flex lg:flex-row lg:justify-between lg:items-center lg:rounded-xl lg:border-2 hidden"
          role="button"
          tabIndex={0}
          onKeyDown={handleIsFilterOpened}
          onClick={handleIsFilterOpened}
        >
          <h2 className="font-title text-blue-900 text-lg px-3"> Filtrer </h2>
          <img
            src="../assets/images/chevronFreelance.png"
            alt="chevron"
            width="30px"
            className="mt-2 mx-3"
          />
        </div>

        <div className="absolute mt-32 lg:static lg:mt-0 lg:w-[95%]">
          <FilterFreelance status={status} setStatus={setStatus} />
          <MobileFilterFreelance
            status={status}
            setStatus={setStatus}
            FilterOpened={FilterOpened}
          />
        </div>
        {/* {<button className="text-white z-50" onClick={() => { getMission() }}>get</button> } */}
        <div className="flex justify-center items-center ml-[30%] mr-[1%] lg:m-0">
          <div className="flex flex-wrap bg-transparent pt-24 pb-12 items-center gap-5 lg:pt-4 lg:justify-around">
            {missions &&
              missions.map((mission, index) => (
                <CardFreelance key={index} {...mission} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancePage;
