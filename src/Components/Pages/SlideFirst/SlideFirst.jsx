import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../img/pizza.jpg";
import Img2 from "../img/burgerssaasa.jpg";
import Img3 from "../img/tranwichsw.jpg";
import Img4 from "../img/kabob.jpg";
import "./slide.css"; // Ensure this import matches the path where you saved the CSS
import { Button } from "@chakra-ui/react";

function SlideFirst() {
  const images = [Img1, Img2, Img3, Img4];

  const sliderRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    dots: false,
    arrows: false,
    speed: 900,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0", // Remove centerPadding to avoid additional offset
    beforeChange: (current, next) => onBeforeChange(current, next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const onBeforeChange = (current, next) => {
    setCenterIndex(next);
  };

  return (
    <div className="SliderBox">
      {/* <Button onClick={nextSlide}>Next</Button> */}
      <Slider
        ref={sliderRef}
        {...settings}
        beforeChange={onBeforeChange}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`slider-item ${
              index === centerIndex ? 'big' : ''
            }`}
          >
            <img
              src={image}
              className="img_slide"
              alt={`slide-${index + 1}`}
            />
          </div>
        ))}
      </Slider>
      {/* <Button onClick={prevSlide}>Prev</Button> */}
    </div>
  );
}

export default SlideFirst;
