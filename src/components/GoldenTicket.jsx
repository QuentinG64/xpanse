/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Button from "./Button";
import Countdown from "./Countdown.jsx";

const GoldenTicket = () => {
  return (
    <div className="h-screen bg-cover bg-[url('../assets/images/goldenTicketBg.png')] text-main-2">
      <h1 className="font-title text-main-2 text-6xl w-9/12 pt-20 pl-6">
        {" "}
        WILL YOU'LL BE THE NEXT SPACE EXPLORER ?
      </h1>
      <h2 className="font-title text-main-2 text-3xl pt-20 pb-10 pl-6">
        Next laucnh in{" "}
      </h2>
      <Countdown />
      <Button text="HOW IS YOUR LUCK ?" />
      <h3 className="font-title text-main-2 text-sm pt-5 pl-6">
        {" "}
        Live stream here
      </h3>
    </div>
  );
};

export default GoldenTicket;
