import React, { useEffect, useState } from "react";
import axios from "axios";
import CardRecruiter from "./CardRecruiter";
import FilterRecruiter from "./FilterRecruiter";
import MobileFilterRecruter from "./MobileFilterRecruter";
import NavBar from "./NavBar";

const RecruiterPage = () => {
  const [astros, setAstros] = useState([]);
  const [status, setStatus] = useState("");
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [FilterOpened, setFilterOpened] = useState("lg:block");

  // je créé une fonction pour changer la variable FilterOpened au clic du bouton filtre ou du bouton apply
  const handleIsFilterOpened = () => {
    setIsFilterOpened(!isFilterOpened);
  };

  // je crée une fonction pour changer la variable FilterOpened. Elle doit prendre selon qu'elle soit ouverte la valeur hidden ou block.
  const handleFilterOpenedValue = () => {
    if (isFilterOpened === true) {
      setFilterOpened("lg:block");
    } else {
      setFilterOpened("lg:hidden");
    }
  };

  console.log(FilterOpened, isFilterOpened);

  const getAstro = () => {
    axios
      .get(
        `https://ll.thespacedevs.com/2.2.0/astronaut/?limit=8&status=${status}`
      )
      .then((res) => res.data.results)
      .then((data) => {
        setAstros(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAstro();
  }, [status]);

  useEffect(() => {
    handleFilterOpenedValue();
  }, [isFilterOpened]);

  return (
    <div className="h-full w-full">
      <NavBar />
      <div className="flex flex-col bg-cover bg-recruitPage bg-fixed lg:items-center lg:justify-center">
        {/* Bouton "Filtrer" */}
        <div
          className="lg:h-10 lg:w-60 lg:bg-white/95 lg:mt-14 lg:flex lg:flex-row lg:justify-between lg:items-center lg:rounded-xl lg:border-2 hidden"
          role="button"
          tabIndex={0}
          onKeyDown={handleIsFilterOpened}
          onClick={handleIsFilterOpened}
        >
          <h2 className="font-title text-red-800 text-lg px-3"> Filtrer </h2>
          <img
            src="../assets/images/chevronRecruter.png"
            alt="chevron"
            width="30px"
            className="mt-2 mx-3"
          />
        </div>
        <div className="absolute mt-32 lg:static lg:mt-0 lg:w-[95%]">
          <FilterRecruiter status={status} setStatus={setStatus} />
          <MobileFilterRecruter
            status={status}
            setStatus={setStatus}
            FilterOpened={FilterOpened}
          />
        </div>
        <div className="flex justify-center items-center ml-[30%] mr-[1%] lg:m-0 ">
          <div className="flex flex-wrap bg-transparent pt-24 pb-12 items-center gap-5 lg:pt-4 lg:justify-around">
            {astros.map((astro, index) => (
              <CardRecruiter key={index} {...astro} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterPage;
