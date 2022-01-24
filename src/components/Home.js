import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="title-home">Ga6eaTna</h1>
      <Link to="/aboutus">
        <div className="container-home">
          <img
            src="https://i0.wp.com/www.inewsguyana.com/wp-content/uploads/2019/10/how_to_invest.jpg?w=750&ssl=1"
            className="home-img"
          />
        </div>
      </Link>
    </div>
  );
};

export default Home;
