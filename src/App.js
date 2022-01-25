import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import Detail from "./components/Detail";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="list/:slug" element={<Detail />} />
        <Route path="/list" element={<List />} />
        <Route path="/aboutus" element={<AboutUs />} />
<<<<<<< HEAD
        <Route path="/twitter" element={<Footer />} />
        <Route path="/instagram" element={<Footer />} />
        <Route path="/facebook" element={<Footer />} />
=======
        <Route path="/profile" element={<UserProfile />} />
>>>>>>> 763f4ef2ef99aa84093b65256cdd5f0bad45dcb3
      </Routes>
    </div>
  );
}

export default App;
