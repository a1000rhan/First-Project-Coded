import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import Detail from "./components/Detail";
import UserProfile from "./components/UserProfile";
import NotFound from "./components/NotFound";
import Payment from "./components/Payment";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="list/:slug" element={<Detail />} />
        <Route path="/list" element={<List />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
