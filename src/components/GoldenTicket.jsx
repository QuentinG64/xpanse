/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Button from "./Button";
import Countdown from "./Countdown.jsx";
import { Link } from "react-router-dom";

const GoldenTicket = () => {
  const forTheWin = () => {
    Math.random();
  };
  return (
    // INITAL PAGE GOLDEN TICKET -- INTRODUCTION
    <div className="h-screen bg-cover bg-[url('../assets/images/goldenTicketBg.png')] text-main-2">
      <h1 className="font-title text-main-2 text-6xl w-9/12 pt-32 pl-7">
        WILL YOU BE THE NEXT SPACE EXPLORER?
      </h1>
      <h2 className="font-title text-main-2 text-3xl pt-20 pb-10 pl-7">
        Next launch in
      </h2>
      <Countdown />
      <Button text="HOW IS YOUR LUCK?" />
      <h3 className="font-title text-main-2 text-sm pt-5 pl-7">
        Live stream here
      </h3>
    </div>
    // --------------------------
    // SECOND PAGE GOLDEN TICKET -- LOOSE
    // <div className="h-screen bg-cover bg-[url('../assets/images/goldenTicketBg.png')] text-main-2">
    //   <h1 className="font-title text-main-2 text-6xl w-9/12 pt-32 pl-7">
    //     SO <span className="text-8xl text-primary-1">SORRY!</span> <br /> YOU
    //     LOST, YOU CAN ALSO{" "}
    //     <span className="text-7xl text-primary-1">TRY AGAIN!</span>
    //   </h1>
    //   <Button text="WANNA TRY AGAIN?" />
    // </div>
  );
};

export default GoldenTicket;
