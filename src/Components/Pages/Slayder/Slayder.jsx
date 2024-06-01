import React, { useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slayder.css'; 

const MentorSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true, // Added this line to adapt the height based on content
  };

  const mentors = [
    { id: 1, imgSrc: 'https://via.placeholder.com/300x200?text=Mentor+1' },
    { id: 2, imgSrc: 'https://via.placeholder.com/300x200?text=Mentor+2' },
    { id: 3, imgSrc: 'https://via.placeholder.com/300x200?text=Mentor+3' },
    { id: 4, imgSrc: 'https://via.placeholder.com/300x200?text=Mentor+4' },
    { id: 5, imgSrc: 'https://via.placeholder.com/300x200?text=Mentor+5' },
    { id: 6, imgSrc: 'https://via.placeholder.com/300x200?text=Mentor+6' },
    { id: 7, imgSrc: 'https://via.placeholder.com/300x200?text=Mentor+7' },
    { id: 8, imgSrc: 'https://via.placeholder.com/300x200?text=Mentor+8' },
  ];

  return (
    <div className="mentor-slider-container">
      <h2>Mentorlarimiz</h2>
      <Slider {...settings}>
        {mentors.map((mentor) => (
          <div key={mentor.id} className="mentor-slide" data-aos="fade-up">
            <img src={mentor.imgSrc} alt={`Mentor ${mentor.id}`} className="mentor-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MentorSlider;
