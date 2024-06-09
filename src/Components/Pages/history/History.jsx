import { useEffect, useState } from "react";
import headCooking from "/public/img/headcooking.jpg";
import "./History.css";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

function History() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("history");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        id="history"
        className={`history-container ${isVisible ? "visible" : ""}`}
      >
        <div className="image-container">
          <img
            className="rounded-xl w-11/12 imgHistory"
            src={headCooking}
            alt=""
          />
        </div>
        <div className="text-container ">
          <p className="pHistory">
            <span>Fast Food</span> mass-produced food product designed for quick
            and efficient preparation and distribution that is sold by certain
            restaurants, concession stands, and convenience stores. Fast food is
            perhaps most associated with chain restaurants—including such
            prominent brands as McDonald’s, Burger King, and Taco Bell—that
            typically offer take-out and drive-through services, as convenience
            and speed are prioritized.
          </p>
        </div>
      </div>
      <div className=" accordion w-10/12">
        <Accordion>
          <AccordionSummary

            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Fast Food
          </AccordionSummary>
          <AccordionDetails>
            <span>Fast Food</span> mass-produced food product designed for quick
            and efficient preparation and distribution that is sold by certain
            restaurants, concession stands, and convenience stores. Fast food is
            perhaps most associated with chain restaurants—including such
            prominent brands as McDonald’s, Burger King, and Taco Bell—that
            typically offer take-out and drive-through services, as convenience
            and speed are prioritized.
          </AccordionDetails>
        </Accordion>
      </div>
      
    </>
  );
}

export default History;
