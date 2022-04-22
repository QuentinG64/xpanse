import { useNavigate } from "react-router";
import Button from "./Button";
import Countdown from "./Countdown.jsx";
import NavBar from "./NavBar";

const GoldenTicket = () => {
  // fonction retournant la variable message indiquant si c'est win ou loose
  const navigate = useNavigate();
  const loose = () => {
    navigate("/goldenticket/loose");
  };

  const win = () => {
    navigate("/goldenticket/win");
  };
  const forTheWin = () => {
    const probability = Math.random();
    if (probability >= 0.2) {
      return loose();
    }
    return win();
  };

  return (
    // INITAL PAGE GOLDEN TICKET -- INTRODUCTION
    <div className="h-screen bg-cover bg-[url('./assets/images/goldenTicketBg.png')] text-main-2">
      <NavBar />
      <h1 className="font-title text-main-2 text-6xl w-9/12 pt-32 pl-7">
        WILL YOU BE THE NEXT SPACE EXPLORER?
      </h1>
      <h2 className="font-title text-main-2 text-3xl pt-20 pb-10 pl-7">
        Next launch in
      </h2>
      <Countdown />
      {/* Il faut qu'au click sur le component Button, en 
      fonction du résultat forTheWin, cela m'affiche la page loose ou win */}
      <div
        role="button"
        tabIndex={0}
        className="mt-10 pl-7"
        onKeyDown={forTheWin}
        // ici modifier la valeur dans le ternaire de result pour définir la probabilité de gain
        onClick={forTheWin}
      >
        <Button text="HOW IS YOUR LUCK?" />
      </div>

      <h3 className="font-title text-main-2 text-sm pt-5 pl-7">
        Live stream <span className="text-lg">here</span>
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
