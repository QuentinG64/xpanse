import Button from "./Button";
import Countdown from "./Countdown.jsx"

const GoldenTicket = () => {
    return (
            <div className="h-screen bg-cover bg-[url('../assets/images/goldenTicketBg.png')] pl-12 text-main-2">
                <h1 className="font-title text-main-2 text-6xl w-9/12 pt-20"> WILL YOU'LL BE THE NEXT SPACE EXPLORER ?</h1>
                <h2 className="font-title text-main-2 text-3xl pt-20">Next laucnh in </h2>
                <Countdown />
                <Button text="HOW IS YOUR LUCK ?" />
                <h3 className="font-title text-main-2 text-sm pt-5"> Live stream here</h3>
            </div>
    )
}

export default GoldenTicket ;