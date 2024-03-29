import { Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./views/Home";
import { GearDetail } from "./views/GearDetail";
import gearData from "./assets/gearData.json";

function App() {



  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":id"  element={<GearDetail data={gearData} />} /> 
    </Routes>    
  )
}

export default App;


