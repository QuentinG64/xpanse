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
          <div className="mt-5 sm:hidden">
            <Phrase margin={50} size={70} color="white">
              <Char char="X" delay={0} />
              <Char char="P" delay={0.9} />
              <Char char="A" delay={0.6} />
              <Char char="N" delay={0.8} />
              <Char char="S" delay={0.8} />
              <Char char="E" delay={1} />
            </Phrase>{" "}
          </div>
          <div className="hidden sm:w-screen sm:flex sm:flex-col sm:items-center sm:h-[15%]">
            <div className="sm:mt-5">
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
          <h3 className="font-title-second text-main-3 mt-6 z-20 sm:m-10">
            {" "}
            Spatial recruitment plateform
          </h3>
        </div>
        <div className="flex sm:flex-col h-5/6 sm:h-5/6">
          <div className="filter grayscale hover:filter-none w-1/2 bg-cover sm:bg-none bg-freeHome sm:filter-none cursor-pointer sm:w-screen sm:h-2/5 sm:flex sm:flex-col sm:items-center sm:justify-center sm:border-b-2 sm:border-t-2">
            <div className=" mt-[28%] ml-[50%] sm:m-0">
              <h3 className="text-main-2 sm:text-2xl sm:text-center sm:font-title">
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
          <div className="filter grayscale hover:filter-none w-1/2 sm:bg-none bg-cover bg-recruitHome sm:filter-none cursor-pointer sm:w-screen sm:h-2/5 sm:flex sm:flex-col sm:items-center sm:justify-center sm:border-b-2">
            <div className="mt-[28%] ml-[10%] sm:m-0">
              <h3 className="text-main-2 sm:text-2xl sm:text-center sm:font-title">
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
  );
};
export default Prehome;
