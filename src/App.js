import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSplit from "./components/HeroSplit";
import PhotographyPage from "./components/PhotographyPage";
import SoftwarePage from "./components/SoftwarePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSplit/>}/>
        <Route path="/photography" element={<PhotographyPage />} />
        <Route path="/software" element={<SoftwarePage />} />
      </Routes>
    </Router>
  );
}

export default App;