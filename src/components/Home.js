import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <h1 className="title-home">Ga6eaTna</h1>
      <Link to="/aboutus">
        <div className="container-home">
          <img
            src="https://images-ext-2.discordapp.net/external/mZpLjEp6LxdXGzJCFpbhc36bVCB6ZxnTL85H9S4rkmA/https/www.clipartkey.com/mpngs/m/4-40753_cartoon-money-clipart-money-bag-clipart-png.png"
            className="home-img"
            alt="homePage"
          />
        </div>
      </Link>
      {/* <Footer /> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/list" element={<List />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes> */}
    </div>
  );
};

export default Home;
