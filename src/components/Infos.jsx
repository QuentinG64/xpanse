import React from "react";
import Button from "./Button";

const Infos = () => {
  return (
    <div className=" bg-main-1 text-main-2">
      <h1 className="font-title text-main-2 text-6xl w-9/12 pt-32 pl-6">200</h1>
      <p className="font-primary">
        {" "}
        Men and women astronauts <br /> on our plateform{" "}
      </p>
      <h2 className="font-title text-main-2 text-6xl w-9/12 pt-32 pl-6">
        1500
      </h2>
      <p className="font-primary">
        {" "}
        Space missions completed <br /> with success{" "}
      </p>
      <h3 className="font-title text-main-2 text-6xl w-9/12 pt-32 pl-6">
        0.5%
      </h3>
      <p className="font-primary">
        of death accidents among <br /> all the missions
      </p>
      <h3 className="font-title text-main-2 text-6xl w-9/12 pt-32 pl-6">3%</h3>
      <p className="font-primary">
        about online commission on <br /> each mission
      </p>
      <Button className="text-main-2" />
    </div>
  );
};

export default Infos;
