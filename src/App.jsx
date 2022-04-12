import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GoldenTicket from "./components/GoldenTicket";
import NavBar from "./components/NavBar";
import Countdown from "./components/Countdown";
// => COMPOSANTS PAS ENCORE CRÉÉS <= //
// import Freelance from "./components/Freelance";
import Recruiter from "./components/Recruiter";
// import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <div className="App h-screen w-screen">
        <NavBar />
        <GoldenTicket />
        <Routes>
          <Route path="/Countdown" element={<Countdown />} />
          <Route path="/Recruiter" element={<RecruiterPage />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;

// => ROUTES A AJOUTER LORSQUE LES COMPOSANTS SERONT CRÉÉS <= //

// <Route path="/Freelance" element={<Freelance />} />
// <Route path="/Recruiter" element={<Recruiter />} />
// <Route path="/AboutUs" element={<AboutUs />} />
