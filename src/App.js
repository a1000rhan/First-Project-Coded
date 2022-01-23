import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import List from "./components/List";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
