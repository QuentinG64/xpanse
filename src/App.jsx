import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GoldenTicket from "./components/GoldenTicket";
import NavBar from "./components/NavBar";
import PreHome from "./components/PreHome";

function App() {
  return (
    <div className="App h-screen w-screen bg-main-1">
      <NavBar />
      <PreHome />
      <GoldenTicket />
    </div>
  );
}

export default App;

// => ROUTES A AJOUTER LORSQUE LES COMPOSANTS SERONT CRÉÉS <= //

// <Route path="/Freelance" element={<Freelance />} />
// <Route path="/Recruiter" element={<Recruiter />} />
// <Route path="/AboutUs" element={<AboutUs />} />
