import fullVed from "/public/vedio/fullvideo.mp4";
import "./Vedio.css";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



function Vedio() {


  return (
    <>
    <div className="flex items-center justify-center m-16 VedParent">
      <video
        autoPlay
        muted
        preload="1"
        loop
        className="w-3/5 rounded-3xl videoVid"
        src={fullVed}
      ></video>
    </div>


    </>
  );
}

export default Vedio;
