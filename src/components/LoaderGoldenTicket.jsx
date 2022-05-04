import React from "react";
import NavBar from "./NavBar";

const LoaderGoldenTicket = () => {
  return (
    <div>
      {/* SECOND PAGE GOLDEN TICKET -- LOOSE */}
      <div className="h-screen bg-cover bg-goldenTicket text-main-2">
        <NavBar />
        <h1 className="font-title text-main-2 text-6xl w-9/12 pt-32 pl-7 sm:text-4xl sm:text-center">
          PLEASE
          <span className="text-8xl text-primary-1 sm:text-5xl">
            WAIT FEW SECONDS!
          </span>
        </h1>
        <div className="h-90 w-90 absolute bottom-0 sm:h-80 sm:w-80">
          <img src="../../assets/images/loader.gif" alt="loader" />
        </div>
      </div>
    </div>
  );
};

export default LoaderGoldenTicket;
