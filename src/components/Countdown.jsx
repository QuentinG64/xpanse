import React from 'react';

function Countdown() {
  const [timer, setTimer] = React.useState(150);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevState) => prevState - 1);
    }, 1000);
  }, []);

  return <h1 className='font-title text-main-2 text-6xl w-9/12 pt-14 pb-14'>{timer} secondes</h1>;
}

export default Countdown;
