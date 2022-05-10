import React from "react";
import Button from "./Button";

const Infos = () => {
  return (
    <div className="bg-main-1 text-main-2 lg:text-primary-1 flex flex-row lg:bg-astronaut lg:bg-no-repeat lg:bg-cover lg:mt-24">
      <div className="mt-20 mb-20 lg:hidden">
        <img
          src="../assets/images/astronautAboutUs.png"
          alt="astronaut"
          width="90%"
        />
      </div>
      <div className="lg:static lg:flex lg:flex-col lg:w-full lg:items-center">
        <div className="absolute lg:static lg:flex lg:flex-col">
          <h1 className="font-title text-main-2 text-6xl w-9/12 pt-32 lg:pt-0 lg:w-full">
            200
          </h1>
          <p className="font-primary lg:bg-white lg:text-black lg:px-2 lg:font-primary">
            {" "}
            Men and women astronauts <br /> on our plateform{" "}
          </p>
        </div>
        <div className="absolute right-96 mt-20 -ml-96 pt-14 lg:static lg:flex lg:flex-col lg:m-0 lg:p-0 ">
          <h2 className="font-title text-main-2 text-6xl pt-44 lg:pt-16 lg:w-full">
            1500
          </h2>
          <p className="font-primary text-main-2 lg:bg-white lg:text-black lg:px-2">
            {" "}
            Space missions completed <br /> with success{" "}
          </p>
        </div>
        <div className="absolute left-96 ml-96 mt-72 pt-28 lg:static lg:flex lg:flex-col lg:m-0 lg:p-0">
          <h3 className="font-title text-main-2 text-6xl w-9/12 pt-32 lg:pt-16 lg:w-full">
            0.5%
          </h3>
          <p className="font-primary lg:bg-white lg:text-black lg:px-2">
            Of death accidents among <br /> all the missions
          </p>
        </div>
        <div className="absolute right-96 pr-96 mt-72 pt-60 lg:static lg:flex lg:flex-col lg:m-0 lg:p-0">
          <h3 className="font-title text-main-2 text-6xl w-9/12 pt-32 lg:pt-16 lg:w-full">
            3%
          </h3>
          <p className="font-primary hidden lg:block lg:bg-white lg:text-black lg:px-2">
            About online commission on <br /> each mission
          </p>
          <div className="absolute left-48 pl-96 lg:static lg:flex lg:flex-col lg:m-0 lg:pl-0 lg:pt-16 lg:text-main-2">
            <Button text="DONATE" />
          </div>
          <p className="font-primary lg:hidden">
            About online commission on <br /> each mission
          </p>
        </div>
      </div>
    </div>
  );
};

export default Infos;
