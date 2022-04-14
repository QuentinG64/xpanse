import React from "react";

function Countdown() {
  const [timer, setTimer] = React.useState(150);

  React.useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const interval = setInterval(() => {
      setTimer((prevState) => prevState - 1);
    }, 1000);
  }, []);

  return (
    <div className="grid grid-cols-3 w-1/3 pl-0">
      <div className="flex-col border-r-2 h-24 align-middle">
        <h1 className="font-title text-main-2 text-7xl pt-1 pl-7">5</h1>
        <h3 className="font-title text-main-2 text-xl mb-14 pl-7">days</h3>
      </div>
      <div className="flex-col border-r-2 h-24 align-middle">
        <h1 className="font-title text-main-2 text-7xl pt-1 pl-7">3</h1>
        <h3 className="font-title text-main-2 text-xl mb-14 pl-7">hours</h3>
      </div>
      <div className="flex-col h-24 align-middle">
        <h1 className="font-title text-main-2 text-7xl pt-1 pl-7">{timer}</h1>
        <h3 className="font-title text-main-2 text-xl mb-14 pl-7">minutes</h3>
      </div>
    </div>
  );
}

export default Countdown;
