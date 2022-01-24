import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="title-home">Ga6eaTna</h1>
      <Link to="/aboutus">
        <div className="container-home">
          <img
            src="https://images-ext-2.discordapp.net/external/mZpLjEp6LxdXGzJCFpbhc36bVCB6ZxnTL85H9S4rkmA/https/www.clipartkey.com/mpngs/m/4-40753_cartoon-money-clipart-money-bag-clipart-png.png"
            className="home-img"
          />
        </div>
      </Link>
    </div>
  );
};

export default Home;
