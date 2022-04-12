import "./App.css";
import GoldenTicket from "./components/GoldenTicket";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App h-screen w-screen bg-main-1">
      <NavBar />
      <GoldenTicket />
    </div>
  );
}

export default App;
