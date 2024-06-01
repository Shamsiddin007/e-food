import React from "react";

function Location() {
  return (
    <div className=" w-full flex flex-col justify-center">
      <h1>Office Locations</h1>
      <div style={{ marginBottom: "20px" }}>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=110MYT_pd3KxxYqJYBcrdGjZlG_YRoRDK"
          className="w-full h-96"
        ></iframe>
      </div>
    </div>
  );
}

export default Location;
