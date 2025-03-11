import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import kungFuPanda from "../../assets/kung-fu-panda-4-poster.jpg";
import dunePoster from "../../assets/dune-poster.jpg";
import shogunPoster from "../../assets/shogun-poster.jpg";
import anoraPoster from "../../assets/Anora-poster.webp";
import './carousal.css'
const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, // Enables preview of next & previous slides
    centerPadding: "100px", // Adjust space for side slides
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img src={kungFuPanda} alt="Slide 1" />
        </div>
        <div>
          <img src={dunePoster} alt="Slide 2" />
        </div>
        <div>
          <img src={shogunPoster} alt="Slide 3" />
        </div>
        <div>
          <img src={anoraPoster} alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
};

export default HomeCarousel;