import React, { useLayoutEffect } from "react";
import fullVed from "/public/vedio/fullvideo.mp4";
import "./Vedio.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Vedio() {
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".videoVid",

        scrub: true,
        markers: false,
        onEnter: () => console.log("entered"),
        onLeave: () => console.log("left"),
        onEnterBack: () => console.log("entered back"),
        onLeaveBack: () => console.log("left back"),
      },
    });

    tl.to(".videoVid", {
      scale: 1.5,
      rotationZ: 360,
      duration: 2,
    })
    .to(".videoVid", {
      scale: 1,
      rotationY: -360,
      duration: 2,
    });
  }, []);

  return (
    <div className=" flex items-center justify-center VedParent">
      <video
        autoPlay
        muted
        preload="1"
        loop
        className="w-3/5 rounded-3xl videoVid square"
        src={fullVed}
      ></video>
    </div>
  );
}

export default Vedio;
