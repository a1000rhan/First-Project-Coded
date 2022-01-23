import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/list" element={<List />} />
        <Route path="/Aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
