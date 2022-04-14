import "./App.css";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GoldenTicket from "./components/GoldenTicket";
import NavBar from "./components/NavBar";
import PreHome from "./components/PreHome";
import Freelance from "./components/FreelancePage";
import RecruiterPage from "./components/RecruiterPage";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <div className="App h-screen w-screen bg-main-1">
      <NavBar />
      <Routes>
        <Route path="/" element={<PreHome />} />
        <Route path="/freelance" element={<Freelance />} />
        <Route path="/goldenticket" element={<GoldenTicket />} />
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
