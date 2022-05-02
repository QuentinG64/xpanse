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

  return (
    <div className="h-full w-full">
      <NavBar />
      <div className="flex flex-col bg-cover bg-recruitPage bg-fixed">
        <div className="absolute mt-[15vh]">
          <FilterRecruiter status={status} setStatus={setStatus} />
        </div>
        <div className="flex justify-center items-center ">
          <div className="flex ml-[10vw] flex-wrap bg-transparent pt-24 justify-start items-center gap-5 w-4/6">
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
