import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import SimpleImageSlider from "react-simple-image-slider";
import image1 from "../image1.jpg";
import image2 from "../image2.jpg";
import image3 from "../image3.jpg";

const Home = () => {
  const images = [
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
  ];
  return (
    <div>
      <h1 className="title-home">Ga6eaTna</h1>
      <div className="container-home">
        <SimpleImageSlider
          width={800}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
          navStyle={2}
          autoPlay={true}
        />
        {/* <img
            src="https://images-ext-2.discordapp.net/external/mZpLjEp6LxdXGzJCFpbhc36bVCB6ZxnTL85H9S4rkmA/https/www.clipartkey.com/mpngs/m/4-40753_cartoon-money-clipart-money-bag-clipart-png.png"
            className="home-img"
            alt="homePage"
          /> */}
      </div>
      <Footer />
      {/* <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/list" element={<List />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes> */}
    </div>
  );
};

export default Home;
