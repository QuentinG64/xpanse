import "./App.css";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GoldenTicket from "./components/GoldenTicket";
import PreHome from "./components/PreHome";
import Freelance from "./components/FreelancePage";
import RecruiterPage from "./components/RecruiterPage";
import TicketLoose from "./components/TicketLoose";
import TicketWin from "./components/TicketWin";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App h-full w-full bg-main-1">
      <Routes>
        <Route path="/" element={<PreHome />} />
        <Route path="/freelance" element={<Freelance />} />
        <Route path="/goldenticket" element={<GoldenTicket />} />
        <Route path="/goldenticket/loose" element={<TicketLoose />} />
        <Route path="/goldenticket/win" element={<TicketWin />} />
        <Route path="/RecruiterPage" element={<RecruiterPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;

// => ROUTES A AJOUTER LORSQUE LES COMPOSANTS SERONT CRÉÉS <= //
// <Route path="/PreHome" element={<PreHome />} />
// <Route path="/Freelance" element={<Freelance />} />
// <Route path="/PreHome" element={<PreHome />} />
