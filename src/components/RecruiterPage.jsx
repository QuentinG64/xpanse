import React, { useEffect, useState } from "react";
import axios from "axios";
import CardRecruiter from "./CardRecruiter";
import FilterRecruiter from "./FilterRecruiter";
import NavBar from "./NavBar";

const RecruiterPage = () => {
  const [astros, setAstros] = useState([]);
  const [status, setStatus] = useState("");
  console.log(status);

  const getAstro = () => {
    axios
      .get(
        `https://ll.thespacedevs.com/2.2.0/astronaut/?status=${status}`
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

  return (
    <div className="h-full w-full">
      <NavBar />
      <div className="flex flex-col bg-cover bg-recruitPage bg-fixed">
        <div className="absolute mt-[15vh]">
          <FilterRecruiter status={status} setStatus={setStatus} />
        </div>
        <div className="flex justify-center items-center ml-[30%] mr-[1%] lg:m-0">
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
