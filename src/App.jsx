import "./App.css";
import GoldenTicket from "./components/GoldenTicket";
import NavBar from "./components/NavBar";
import PreHome from "./components/PreHome";

function App() {
  return (
    <div className="App h-screen w-screen">
      <NavBar />
      <PreHome />
      <GoldenTicket />
    </div>
  );
}

export default App;
