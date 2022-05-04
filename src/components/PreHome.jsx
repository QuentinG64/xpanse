import React from "react";
import { useNavigate } from "react-router-dom";
import { Phrase, Char } from "animatedtxt";
import Button from "./Button";

const Prehome = () => {
  const navigate = useNavigate();
  const freelancer = () => {
    navigate("/freelance");
  };
  const recruiter = () => {
    navigate("/RecruiterPage");
  };

  return (
    <div>
      <div className="bg-main-1 h-screen">
        <div className="w-screen flex flex-col items-center h-1/6 z-20">
          <div className="mt-5 lg:hidden">
            <Phrase margin={50} size={70} color="white">
              <Char char="X" delay={0} />
              <Char char="P" delay={0.9} />
              <Char char="A" delay={0.6} />
              <Char char="N" delay={0.8} />
              <Char char="S" delay={0.8} />
              <Char char="E" delay={1} />
            </Phrase>{" "}
          </div>
          <div className="hidden lg:w-screen lg:flex lg:flex-col lg:items-center lg:h-[15%]">
            <div className="lg:mt-5">
              <Phrase margin={10} size={25} color="white">
                <Char char="X" delay={0} />
                <Char char="P" delay={0.9} />
                <Char char="A" delay={0.6} />
                <Char char="N" delay={0.8} />
                <Char char="S" delay={0.8} />
                <Char char="E" delay={1} />
              </Phrase>{" "}
            </div>
          </div>
          {/* <img className="mt-5 w-1/2" src="../assets/images/xpanseLogoMainPage.png" alt="Logo"></img> */}
          <h3 className="font-title-second text-main-3 mt-6 z-20 lg:m-10">
            {" "}
            Spatial recruitment plateform
          </h3>
        </div>
        <div className="flex sm:flex-col h-5/6 sm:h-5/6 sm:backdrop-blur-sm">
          <div className="filter grayscale hover:filter-none w-1/2 bg-cover bg-no-repeat lg:filter-none sm:bg-contain bg-freeHome sm:filter-none cursor-pointer sm:w-screen sm:h-2/5">
            <div className="lg:backdrop-grayscale lg:backdrop-blur-[2px] lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center lg:flex-col sm:backdrop-grayscale sm:backdrop-blur-[2px] sm:w-full sm:h-full sm:flex sm:flex-col sm:items-center sm:justify-center sm:border-b-2 sm:border-t-2">
              <div className=" mt-[28%] ml-[50%] sm:m-0 lg:m-0">
                <h3 className="text-main-2 lg:font-title lg:text-2xl lg:text-center">
                  {" "}
                  I am a
                </h3>
                <div
                  onKeyDown={() => {
                    freelancer();
                  }}
                  tabIndex={0}
                  role="button"
                  onClick={() => {
                    freelancer();
                  }}
                >
                  <Button text="Freelancer" />
                </div>
              </div>
            </div>
          </div>
          <div className="filter grayscale hover:filter-none w-1/2 lg:bg-contain bg-cover bg-no-repeat lg:filter-none sm:bg-right bg-recruitHome sm:filter-none cursor-pointer sm:w-screen sm:h-2/5 sm:flex sm:flex-col sm:items-center sm:justify-center sm:border-b-2 sm:blur-sm">
            <div className="lg:backdrop-grayscale lg:backdrop-blur-[2px] lg:h-full lg:w-full lg:flex lg:justify-center lg:items-center lg:flex-col">
              <div className="mt-[28%] ml-[15%] sm:m-0 lg:m-0">
                <h3 className="text-main-2 lg:font-title lg:text-2xl lg:text-center">
                  {" "}
                  I am a
                </h3>
                <div
                  onKeyDown={() => {
                    recruiter();
                  }}
                  role="button"
                  onClick={() => {
                    recruiter();
                  }}
                  tabIndex={0}
                >
                  <Button text="Recruiter" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Prehome;
