import React, { useState } from "react";
import Branches from "./Branches/Branches";
import Locations from "/src/Components/Pages/carta/location/Location";

function Pages3() {
  const [brech, setBrich] = useState(false);
  const [location, setLocation] = useState(false);

  const handleBrich = () => {
    setBrich(true);
    setLocation(false);
  };

  const handleLocation = () => {
    setLocation(true);
    setBrich(false);
  };

  return (
    <>
      <div className="w-4/5 m-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif font-bold text-3xl py-10">Branches</h1>
          </div>
          <div className="join">
            <input
              className="join-item btn"
              type="radio"
              name="options"
              aria-label="List"
              onClick={handleBrich}
            />
            <input
              className="join-item btn"
              type="radio"
              name="options"
              aria-label="Map"
              onClick={handleLocation}  // Bu yerda onClick hodisasi ishlatilgan
            />
          </div>
        </div>

        {brech && (
          <div>
            <Branches
              name="MAX WAY BERUNIY"
              adress="Beruni street, 47, Tashkent"
              time="Open until 23:00"
              working="Working hours:"
              day="Mon-Sun: 10:00-23:00"
              phonetext="Phone:"
              phone={998712005400}
            />
             <Branches
              name="MAX WAY ATLAS"
              adress="Katartal street, 28, Tashkent"
              time="Open until 22:00"
              working="Working hours:"
              day="Mon-Sun: 10:00-23:00"
              phonetext="Phone:"
              phone={998712005400}
            />
            <Branches
              name="MAX WAY - DRUJBA"
              adress="Almazar microdistrict, 8/2, Chilanzar district, Tashkent"
              time="Open until 04:00"
              working="Working hours:"
              day="Mon-Sun: 10:00-23:00"
              phonetext="Phone:"
              phone={9998712005400}
            />
            <Branches
              name="MAX WAY MEGA PLANET"
              adress="Niyazbek street, 1"
              time="Open until 03:00"
              working="Working hours:"
              day="Mon-Sun: 10:00-23:00"
              phonetext="Phone:"
              phone={998712005400}
            />
            <Branches
              name="MAX WAY AVIASOZLAR"
              adress="Aviasozlar street, 23"
              time="Open until 03:00"
              working="Working hours:"
              day="Mon-Sun: 10:00-23:00"
              phonetext="Phone:"
              phone={998712005400}
            />
            <Branches
              name="MAX WAY RISOVIY"
              adress="Uzbekistan, Tashkent, Altynkulskaya street, 10"
              time="Open until 03:00"
              working="Working hours:"
              day="Mon-Sun: 10:00-23:00"
              phonetext="Phone:"
              phone={998712005400}
            />
            <Branches
              name="MAX WAY PARUS"
              adress="Katartal street, 60/5"
              time="Open until 03:00"
              working="Working hours:"
              day="Mon-Sun: 10:00-23:00"
              phonetext="Phone:"
              phone={998712005400}
            />
            <Branches
              name="MAX WAY MAGIC CITY"
              adress="Uzbekistan, Tashkent, Babur street, 174/6"
              time="Open until 03:00"
              working="Working hours:"
              day="Mon-Sun: 10:00-23:00"
              phonetext="Phone:"
              phone={998712005400}
            />
            <Branches
              name="MAX WAY UNIVERSAM"
              adress="Uzbekistan, Tashkent, Amir Temur Avenue, 41/3"
              time="Open until 23:00"
              working="Working hours:"
              day="Mon-Sun: 10:00-23:00"
              phonetext="Phone:"
              phone={998712005400}
            />
            <Branches
              name="MAX WAY NEXT"
              adress="Uzbekistan, Tashkent, Babur street, 6"
              time="Open until 22:00"
              working="Working hours:"
              day="Mon-Sun: 10:00-23:00"
              phonetext="Phone:"
              phone={998712005400}
            />
            <Branches
              name="MAX WAY SERGELI"
              adress="Uzbekistan, Tashkent, Sergeli district, Sergeli-VIIIA massif, 11"
              time="Open until 03:00"
              working="Working hours:"
              day="Mon-Sun: 10:00-23:00"
              phonetext="Phone:"
              phone={998712005400}
            />
            <Branches
              name="MAX WAY FONTAN"
              adress="Amir Temur Avenue"
              time="Open until 03:00"
              working="Working hours:"
              day="Mon-Sun: 10:00-23:00"
              phonetext="Phone:"
              phone={998712005400}
            />
            <Branches
              name="MAX WAY MINOR"
              adress="MaxWay"
              time="Open until 03:00"
              working="Working hours:"
              day="Mon-Sun: 10:00-23:00"
              phonetext="Phone:"
              phone={998712005400}
            />
           
          </div>
        )}
        {location && <Locations />}
      </div>
    </>
  );
}

export default Pages3;
