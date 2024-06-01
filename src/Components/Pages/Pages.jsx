import React, { useEffect, useState } from "react";
import gifPage from "/public/vedio/Cinematic Cooking Montage _ MK.mp4";
import Carta from "./carta/Carta";
import History from "./history/History";
import Cooking from "./cooking/Cooking";
import Vedios from "./Vedio/Vedio";
import Pagesinputs from "./pagesinputs/Pagesinput";
// import Slayder from "./Slayder/Slayder";
import SlideFirst from './SlideFirst/SlideFirst';
import Modals from './Modal/Modal';
import gerbImg from "/public/img/wheat-removebg-preview.png";
import gsap from 'gsap';
import Jamoa from './Jamoa/Jamoa'

function Pages() {
    useEffect(() => {
      let textAnimation = gsap.timeline();
      textAnimation.from('.word', {
          y: 150,
          opacity: 0,
          stagger: {
            each: 0.1,
          },
          ease: 'power1.out',
      });
    },[]);
    useEffect(() => {
      let textAnimation = gsap.timeline();
      textAnimation.from('.max', {
          y: 30,
          opacity: 0,
          stagger: {
            each: 0.1,
          },
          ease: 'power1.out',
      });
    },[]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
        <div className="flex items-center gap 10px pt-16 gap-3">
        {
          'Fast food'.split(' ').map((word, index) => {
            return word === '' ? <div key={index} className="word">&nbsp;</div> : <div key={index} className="word text-7xl">{word}</div>
          })
        }
        <span className="text-7xl text-blue-600"> Dishes</span>
        </div>
        <div className="flex gap-2">
        {
          'Ads & Social Creatives using artificial intelligence'.split(' ').map((max,inid)=>{
            return max === "" ? <div key={inid} className="max">&nbsp;</div> : <div key={inid} className="max">{max}</div>
          })
        } 
        </div>  

        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="rounded-xl bg-inherit border-2 py-2 px-2.5 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring text-white my-8 "
        >
          Get Started - its free
        </button>
        <video
          autoPlay
          muted
          preload="1"
          loop
          className="w-3/5 my-12 scale-110 rounded-3xl"
          src={gifPage}
        ></video>

        <div className="flex gap-4 py-20">
          <div className="flex items-center justify-evenly">
            <h1 className="text-6xl font-semibold ">15m+</h1>
            <span className="flex flex-col text-gray-400 text-lg">
              Happy <p>users</p>
            </span>
          </div>
          <div>
            <img className="w-28" src={gerbImg} alt="" />
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-6xl font-semibold ">4.9</h1>
            <span className="flex flex-col text-gray-400 text-lg">
              Rating off<p>App</p>
            </span>
          </div>
        </div>

        <Modals/>
        <SlideFirst/>
        <Carta />
        <History />
        <Vedios />
        {/* <Slayder /> */}
        <Jamoa/>
        <Cooking />
        <Pagesinputs />
      </div>
    </>
  );
}

export default Pages;
