import Sertficat from "/public/img/sert.mp4";
import "./Pages4.css";
import About from "../About/About";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Pages() {
  return (
    <>
      <div className="w-4/5 m-auto mb-28 pt-20">
        <h1 className="py-10 text-3xl font-bold cursor-pointer aboutCompany">
          About the company
        </h1>
        <div className="flex justify-between aboutParent">
          <div className="w-2/5">
            <p className="opacity-95 aboutP">
              The first Max Way facility was opened in 2005. In the initial
              stage, the top places were burgers, donuts and lavash. Today, it
              is a well-known and rapidly developing brand with 20 branches in
              Tashkent. The best-selling dishes are burgers, burgers,
              sandwiches, pita bread and donar kebabs. The dish that Max Way is
              famous for is the club sandwich. Chicken schnitzel is marinated
              according to a special recipe and has an excellent taste. That is
              why many guests prefer this menu item. Max Way uses only halal
              products. In addition to the main menu, it also offers a line of
              low-fat sauces. The chefs of the chain pay special attention to
              the quality of the products they use. At Max Way, the products are
              kept very fresh and according to ISO standards. The dishes are not
              only tasty, but also easily digestible and suitable for both quick
              meals and full meals. At any of the Max Way branches, a relaxed
              and comfortable atmosphere prevails, and the network's friendly
              team works without interruptions and without problems. During the
              day, you can meet a variety of guests in chain restaurants:
              schoolchildren, students, and businessmen who want a hearty meal
              after work. Max Way is a place frequented by parents with
              children, and the establishment has become a family quick service
              restaurant. An individual approach to everyone, a varied and tasty
              menu, competent and at the same time comfortable order, as well as
              ideal cleanliness at Max Way - these are the main signs that
              encourage guests to come to the restaurant again and again.
            </p>
          </div>
          <div className="video-container">
            <video autoPlay muted preload="1" loop src={Sertficat}></video>
          </div>
          <div className="accordionText w-12/12">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                About the company
              </AccordionSummary>
              <AccordionDetails>
                The first Max Way facility was opened in 2005. In the initial
                stage, the top places were burgers, donuts and lavash. Today, it
                is a well-known and rapidly developing brand with 20 branches in
                Tashkent. The best-selling dishes are burgers, burgers,
                sandwiches, pita bread and donar kebabs. The dish that Max Way is
                famous for is the club sandwich. Chicken schnitzel is marinated
                according to a special recipe and has an excellent taste. That is
                why many guests prefer this menu item. Max Way uses only halal
                products. In addition to the main menu, it also offers a line of
                low-fat sauces. The chefs of the chain pay special attention to
                the quality of the products they use.
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                About the company
              </AccordionSummary>
              <AccordionDetails>
                At Max Way, the products are kept very fresh and according to ISO
                standards. The dishes are not only tasty, but also easily
                digestible and suitable for both quick meals and full meals. At
                any of the Max Way branches, a relaxed and comfortable atmosphere
                prevails, and the network's friendly team works without
                interruptions and without problems. During the day, you can meet a
                variety of guests in chain restaurants: schoolchildren, students,
                and businessmen who want a hearty meal after work. Max Way is a
                place frequented by parents with children, and the establishment
                has become a family quick service restaurant. An individual
                approach to everyone, a varied and tasty menu, competent and at
                the same time comfortable order, as well as ideal cleanliness at
                Max Way - these are the main signs that encourage guests to come
                to the restaurant again and again.
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
      <About />
    </>
  );
}

export default Pages;
