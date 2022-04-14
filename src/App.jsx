import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GoldenTicket from "./components/GoldenTicket";
import NavBar from "./components/NavBar";
// => COMPOSANTS PAS ENCORE CRÉÉS <= //
// import Freelance from "./components/Freelance";
import RecruiterPage from "./components/RecruiterPage";
import TicketLoose from "./components/TicketLoose";
import TicketWin from "./components/TicketWin";
// import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App h-screen w-screen bg-main-1">
      <NavBar />
      <Routes>
        <Route path="/goldenticket" element={<GoldenTicket />} />
        <Route path="/goldenticket/loose" element={<TicketLoose />} />
        <Route path="/goldenticket/win" element={<TicketWin />} />
        <Route path="/RecruiterPage" element={<RecruiterPage />} />
      </Routes>
    </div>
  );
}

export default App;

// => ROUTES A AJOUTER LORSQUE LES COMPOSANTS SERONT CRÉÉS <= //

// <Route path="/Freelance" element={<Freelance />} />
// <Route path="/Recruiter" element={<Recruiter />} />
// <Route path="/AboutUs" element={<AboutUs />} />
