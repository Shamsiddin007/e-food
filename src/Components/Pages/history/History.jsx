import React, { useEffect, useState } from "react";
import headCooking from "/public/img/headcooking.jpg";
import './History.css';

function History() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('history');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility initially
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="history" className={`history-container ${isVisible ? 'visible' : ''}`}>
      <div className="image-container">
        <img className="rounded-xl w-11/12 " src={headCooking} alt="" />
      </div>
      <div className="text-container">
        <p>
          <span>Fast Food</span> mass-produced food
          product designed for quick and efficient preparation and distribution
          that is sold by certain restaurants, concession stands, and
          convenience stores. Fast food is perhaps most associated with chain
          restaurants—including such prominent brands as McDonald’s, Burger
          King, and Taco Bell—that typically offer take-out and drive-through
          services, as convenience and speed are prioritized.
        </p>
      </div>
    </div>
  );
}

export default History;
