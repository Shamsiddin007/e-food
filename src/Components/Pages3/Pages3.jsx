import React, { useState, useEffect, useRef } from "react";
import Branches from "./Branches/Branches";
import Locations from "/src/Components/Pages/carta/location/Location";
import "./Pages3.css"

function Pages3() {
  const [brech, setBrich] = useState(true);
  const [location, setLocation] = useState(false);
  const [visibleBranches, setVisibleBranches] = useState({});
  const [activeButton, setActiveButton] = useState("list");

  const branchRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisibleBranches((prev) => ({
          ...prev,
          [entry.target.dataset.index]: entry.isIntersecting,
        }));
      });
    }, { threshold: 0.1 });

    branchRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      branchRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [brech]);

  const handleBrich = () => {
    setBrich(true);
    setLocation(false);
    setActiveButton("list");
  };

  const handleLocation = () => {
    setLocation(true);
    setBrich(false);
    setActiveButton("map");
  };

  return (
    <div className="w-4/5 m-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif font-bold text-3xl py-10">Branches</h1>
        </div>
        <div className="join">
          <input
            className={`join-item btn ${activeButton === "list" ? "active" : ""}`}
            type="radio"
            name="options"
            aria-label="List"
            onClick={handleBrich}
            checked={brech}
          />
          <input
            className={`join-item btn ${activeButton === "map" ? "active" : ""}`}
            type="radio"
            name="options"
            aria-label="Map"
            onClick={handleLocation}
            checked={location}
          />
        </div>
      </div>

      {brech && (
        <div className="parentBrench">
          {[
            {
              name: "MAX WAY ATLAS",
              adress: "Katartal street, 28, Tashkent",
              time: "Open until 22:00",
              working: "Working hours:",
              day: "Mon-Sun: 10:00-23:00",
              phonetext: "Phone:",
              phone: 998712005400,
            },
            
            {
              name: "MAX WAY ATLAS",
              adress: "Katartal street, 28, Tashkent",
              time: "Open until 22:00",
              working: "Working hours:",
              day: "Mon-Sun: 10:00-23:00",
              phonetext: "Phone:",
              phone: 998712005400,
            },
            {
              name: "MAX WAY ATLAS",
              adress: "Katartal street, 28, Tashkent",
              time: "Open until 22:00",
              working: "Working hours:",
              day: "Mon-Sun: 10:00-23:00",
              phonetext: "Phone:",
              phone: 998712005400,
            },
            {
              name: "MAX WAY ATLAS",
              adress: "Katartal street, 28, Tashkent",
              time: "Open until 22:00",
              working: "Working hours:",
              day: "Mon-Sun: 10:00-23:00",
              phonetext: "Phone:",
              phone: 998712005400,
            },
            {
              name: "MAX WAY ATLAS",
              adress: "Katartal street, 28, Tashkent",
              time: "Open until 22:00",
              working: "Working hours:",
              day: "Mon-Sun: 10:00-23:00",
              phonetext: "Phone:",
              phone: 998712005400,
            },
            {
              name: "MAX WAY ATLAS",
              adress: "Katartal street, 28, Tashkent",
              time: "Open until 22:00",
              working: "Working hours:",
              day: "Mon-Sun: 10:00-23:00",
              phonetext: "Phone:",
              phone: 998712005400,
            },
            {
              name: "MAX WAY BERUNIY",
              adress: "Beruni street, 47, Tashkent",
              time: "Open until 23:00",
              working: "Working hours:",
              day: "Mon-Sun: 10:00-23:00",
              phonetext: "Phone:",
              phone: 998712005400,
            }, {
              name: "MAX WAY BERUNIY",
              adress: "Beruni street, 47, Tashkent",
              time: "Open until 23:00",
              working: "Working hours:",
              day: "Mon-Sun: 10:00-23:00",
              phonetext: "Phone:",
              phone: 998712005400,
            },
            
            {
              name: "MAX WAY ATLAS",
              adress: "Katartal street, 28, Tashkent",
              time: "Open until 22:00",
              working: "Working hours:",
              day: "Mon-Sun: 10:00-23:00",
              phonetext: "Phone:",
              phone: 998712005400,
            },
            {
              name: "MAX WAY BERUNIY",
              adress: "Beruni street, 47, Tashkent",
              time: "Open until 23:00",
              working: "Working hours:",
              day: "Mon-Sun: 10:00-23:00",
              phonetext: "Phone:",
              phone: 998712005400,
            },
            {
              name: "MAX WAY ATLAS",
              adress: "Katartal street, 28, Tashkent",
              time: "Open until 22:00",
              working: "Working hours:",
              day: "Mon-Sun: 10:00-23:00",
              phonetext: "Phone:",
              phone: 998712005400,
            },
            {
              name: "MAX WAY ATLAS",
              adress: "Katartal street, 28, Tashkent",
              time: "Open until 22:00",
              working: "Working hours:",
              day: "Mon-Sun: 10:00-23:00",
              phonetext: "Phone:",
              phone: 998712005400,
            },

          ].map((branch, index) => (
            <Branches
              key={index}
              ref={(el) => (branchRefs.current[index] = el)}
              {...branch}
              visible={!!visibleBranches[index]}
              data-index={index}
            />
          ))}
        </div>
      )}
      {location && <Locations />}
    </div>
  );
}

export default Pages3;
