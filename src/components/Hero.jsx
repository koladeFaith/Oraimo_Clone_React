import React from "react";
import style from "../css/Hero.module.css";
import slide1 from "../images/11_e3db4738-13aa-4999-8800-573f322a92cd_1728x.jpg";
import slide2 from "../images/20230714-164247_1728x (1).jpg";
import slide3 from "../images/20231012-170652_1728x (1).jpg";
import slide4 from "../images/00_1728x (1).jpg";

const Hero = () => {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide  overflow-hidden w-100"
        data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100 vh-100 object-fit-cover" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100 vh-100 object-fit-cover" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100 vh-100 object-fit-cover" alt="Slide 3" />
          </div>{" "}
          <div className="carousel-item">
            <img src={slide4} className="d-block w-100 vh-100 object-fit-cover" alt="Slide 4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
