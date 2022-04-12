import "./App.css";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GoldenTicket from "./components/GoldenTicket";
import NavBar from "./components/NavBar";
import RecruiterPage from "./components/RecruiterPage";
import AboutUs from "./components/AboutUs";

// => COMPOSANTS PAS ENCORE CRÉÉS <= //
// import Freelance from "./components/Freelance";

function App() {
  return (
    <div className="App h-screen w-screen bg-main-1">
      <NavBar />
      <Routes>
        <Route path="/goldenticket" element={<GoldenTicket />} />
        <Route path="/RecruiterPage" element={<RecruiterPage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;

// => ROUTES A AJOUTER LORSQUE LES COMPOSANTS SERONT CRÉÉS <= //

// <Route path="/Freelance" element={<Freelance />} />
// <Route path="/Recruiter" element={<Recruiter />} />
