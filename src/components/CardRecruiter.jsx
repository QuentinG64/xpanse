import React from "react";
import Tilt from "react-parallax-tilt";

const CardRecruiter = () => {
  return (
    <div className="flex justify-around h-screen w-screen bg-cover items-center bg-[url('../assets/images/recruiterBackground.png')]">
      <Tilt>
        <div className="w-56 h-80 rounded-2xl bg-main-2 bg-opacity-10 backdrop-blur-lg relative z-2 shadow-5xl border border-opacity-5 border-r-0 border-b-0 backdrop-filter hover:border-2 ease-in duration-100">
          <div className="h-full w-full flex flex-col justify-around items-center ">
            <h2 className="text-main-2 font-second text-center mt-3">
              JIMMY GANCI
            </h2>

            <div className="mt-20 relative font-primary text-left w-full pl-4">
              <p className="dataCard">Nationality:</p>
              <p className="dataCard">Date of birth:</p>
              <p className="dataCard">Agency:</p>
              <p className="dataCard">Status:</p>
              <p className="dataCard">Twitter:</p>
            </div>

            <button className="cursor-pointer text-xs mb-3 rounded-2xl px-4 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-70 ">
              READ MORE
            </button>
          </div>
        </div>
      </Tilt>
      <Tilt>
        <div className="w-56 h-80 rounded-2xl bg-main-2 bg-opacity-10 backdrop-blur-lg relative z-2 shadow-5xl border border-opacity-5 border-r-0 border-b-0 backdrop-filter hover:border-2 ease-in duration-100">
          <div className="h-full w-full flex flex-col justify-around items-center ">
            <h2 className="text-main-2 font-second text-center mt-3">
              LYDIE KAIKO
            </h2>

            <div className="mt-20 relative font-primary text-left w-full pl-4">
              <p className="dataCard">Nationality:</p>
              <p className="dataCard">Date of birth:</p>
              <p className="dataCard">Agency:</p>
              <p className="dataCard">Status:</p>
              <p className="dataCard">Twitter:</p>
            </div>

            <button className="cursor-pointer text-xs mb-3 rounded-2xl px-4 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-70 ">
              READ MORE
            </button>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

//

export default CardRecruiter;
