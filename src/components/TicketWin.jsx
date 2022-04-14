import React from "react";
import Button from "./Button";

const TicketWin = () => {
  return (
    <div>
      {/* SECOND PAGE GOLDEN TICKET -- LOOSE */}
      <div className="h-screen bg-cover bg-[url('../assets/images/goldenTicketBg.png')] text-main-2">
        <h1 className="font-title text-main-2 text-6xl w-9/12 pt-32 pl-7">
          <span className="text-8xl text-primary-1">WOOOOH!</span> <br /> YOU
          JUST
          <span className="text-7xl text-primary-1">WIN A FREE TICKET</span> FOR
          THE NEXT SPACE TRIP!
        </h1>
        <Button text="DOWNLOAD TICKET" />
      </div>
    </div>
  );
};

export default TicketWin;
