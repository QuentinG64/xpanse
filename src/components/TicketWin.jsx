import React, { useEffect, useState } from "react";
import Button from "./Button";
import LoaderGoldenTicket from "./LoaderGoldenTicket";
import NavBar from "./NavBar";

const TicketWin = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return loading ? (
    <LoaderGoldenTicket />
  ) : (
    <div>
      {/* THIRD PAGE GOLDEN TICKET -- WIN */}
      <div className="h-screen bg-cover bg-[url('../assets/images/goldenTicketBg.png')] text-main-2">
        <NavBar />
        <h1 className="font-title text-main-2 text-6xl w-9/12 pt-32 pl-7">
          <span className="text-8xl text-primary-1">WOOOOH!</span> <br /> YOU
          JUST
          <span className="text-7xl text-primary-1">WIN A FREE TICKET</span> FOR
          THE NEXT SPACE TRIP!
        </h1>
        <Button text="DOWNLOAD TICKET" />
        <div className="h-90 w-90 absolute bottom-0 ml-80">
          <img src="../../assets/images/snoop.gif" alt="win" />
        </div>
      </div>
    </div>
  );
};

export default TicketWin;
