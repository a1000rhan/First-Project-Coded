import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/list" element={<List />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
