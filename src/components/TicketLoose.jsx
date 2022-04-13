import React from "react";

const TicketLoose = () => {
  return (
    <div className="h-screen bg-cover bg-[url('../assets/images/goldenTicketBg.png')] text-main-2">
      <h1 className="font-title text-main-2 text-6xl w-9/12 pt-32 pl-7">
        SORRY, YOU LOST, YOU CAN TRY AGAIN IF YOU WANT TO!
      </h1>
      <h2 className="font-title text-main-2 text-3xl pt-20 pb-10 pl-7">
        Next launch in
      </h2>
      <Countdown />
      <Button text="TRY AGAIN?" />
      <h3 className="font-title text-main-2 text-sm pt-5 pl-7">
        Live stream here
      </h3>
    </div>
  );
};

export default TicketLoose;
