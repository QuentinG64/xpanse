import React from "react";
import Button from "./Button";

const Infos = () => {
  return (
    <div className=" bg-main-1 text-main-2 flex flex-row">
      <div className="mt-20 mb-20">
        <img src="./assets/images/astronautAboutUs.png" alt="astronaut" />
      </div>
      <div className="">
        <div className="absolute">
          <h1 className="font-title  text-main-2 text-6xl w-9/12 pt-32 ">
            200
          </h1>
          <p className="font-primary">
            {" "}
            Men and women astronauts <br /> on our plateform{" "}
          </p>
        </div>
        <div className="absolute right-96 mt-20 -ml-96 pt-14 ">
          <h2 className="font-title text-main-2 text-6xl pt-44">1500</h2>
          <p className="font-primary text-main-2">
            {" "}
            Space missions completed <br /> with success{" "}
          </p>
        </div>
        <div className="absolute left-96 ml-96 mt-72 pt-28">
          <h3 className="font-title text-main-2 text-6xl w-9/12 pt-32 ">
            0.5%
          </h3>
          <p className="font-primary">
            Of death accidents among <br /> all the missions
          </p>
        </div>
        <div className="absolute right-96 pr-96 mt-72 pt-60">
          <h3 className="font-title text-main-2 text-6xl w-9/12 pt-32 ">3%</h3>
          <div className="absolute left-48 pl-96">
            <Button text="DONATE" />
          </div>
          <p className="font-primary">
            About online commission on <br /> each mission
          </p>
        </div>
      </div>
    </div>
  );
};

export default Infos;
