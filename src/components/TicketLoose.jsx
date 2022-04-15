import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router";
import NavBar from "./NavBar";
import LoaderGoldenTicket from "./LoaderGoldenTicket";

const TicketLoose = () => {
  let navigate = useNavigate();
  const tryAgain = () => {
    navigate("/goldenticket");
  };

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
      {/* SECOND PAGE GOLDEN TICKET -- LOOSE */}
      <div className="h-screen bg-cover bg-[url('../assets/images/goldenTicketBg.png')] text-main-2">
        <NavBar />
        <h1 className="font-title text-main-2 text-6xl w-9/12 pt-32 pl-7">
          SO <span className="text-8xl text-primary-1">SORRY!</span> <br /> YOU
          LOST, YOU CAN ALSO{" "}
          <span className="text-7xl text-primary-1">TRY AGAIN!</span>
        </h1>
        <div
          onClick={() => {
            tryAgain();
          }}
        >
          <Button text="WANNA TRY AGAIN?" />
        </div>
        <div className="h-90 w-90 absolute bottom-0">
          <img
            src="../../assets/images/bird.gif"
            alt="win"
            style={{ height: "25rem", marginLeft: "30rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TicketLoose;
