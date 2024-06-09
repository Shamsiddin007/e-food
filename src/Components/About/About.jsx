import React, { useState, useEffect } from 'react';
import './About.css'; 
import burakImg from '/public/img/Burakozdemir.jpg';
import Massimo from '/public/img/massimo.jpg';
import  Redzepi from '/public/img/rener.webp';
import  Grant  from '/public/img/grant.jpg';
import  Alain  from '/public/img/alian.webp';
import  Gordon  from '/public/img/gordon.webp';


const images = [
  {
    src: burakImg,
    name: 'Burak Ozdemir',
    age: 30,
    img:"/public/img/",
    telegram: 'https://telegram.org/Burakozdemir.jpg',
    instagram: 'https://www.instagram.com/cznburak/',
    instaName: '@burak_ozdemir',
    teleName:'@burak_ozdemir'
  },
  {
    src: Massimo,
    name: 'Massimo Bottura',
    age: 25,
    telegram: 'https://telegram.org/',
    instagram: 'https://www.instagram.com/massimobottura/',
    instaName: '@massimobottura',
    teleName:'@massimobottura'

  },
  {
    src: Redzepi,
    name: 'René Redzepi',
    age: 32,
    telegram: 'https://telegram.org/',
    instagram: 'https://www.instagram.com/reneredzepinoma/',
    instaName: "@reneredzepinoma",
    teleName:'@reneredzepinoma'
  },
  {
    src: Grant,
    name: 'Grant Achatz',
    age: 40,
    telegram: 'https://telegram.org/',
    instagram: 'https://www.instagram.com/grant_achatz/',
    instaName: '@grant_achatz',
    teleName:'@grant_achatz'
  },
  {
    src: Alain,
    name: 'Alain Ducasse',
    age: 55,
    telegram: 'https://telegram.org/',
    instagram: 'https://www.instagram.com/alainducasse/',
    instaName: '@alainducasse',
    teleName:'@alainducasse',
  },
  {
    src: Gordon,
    name: 'Gordon Ramsay',
    age: 45,
    telegram: 'https://telegram.org/',
    instagram: 'https://www.instagram.com/gordongram/',
    instaName: '@gordongram',
    teleName:"@gordongram"
  },
];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSelectedImage(images[currentIndex]);
  }, [currentIndex]);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="bod">
      <h1 className='text-5xl py-10'>Our team</h1>
      <div className="App">
        <div className="slider">
          <button className="arrow left" onClick={goToPreviousSlide}>&#10094;</button>
          <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <div className="slide" key={index} onClick={() => handleImageClick(index)}>
                <img className='slideImg' src={image.src} alt={`Image ${index + 1}`} />
              </div>
            ))}
          </div>
          <button className="arrow right" onClick={goToNextSlide}>&#10095;</button>
        </div>
        <div className='info-box-parent'>
          <div className="info-box">
            <p><strong className='strong'>Name:</strong> <span id="name" className='names'>{selectedImage.name}</span></p>
            <p><strong className='strong'>Age:</strong> <span id="age" className='names'>{selectedImage.age}</span></p>
            <p><strong className='strong'>Telegram:</strong> <a href={selectedImage.telegram} target='blank' id="telegram" className='insta'>{selectedImage.teleName}</a></p>
            <p><strong className='strong'>Instagram:</strong> <a href={selectedImage.instagram} target='blank' id="instagram" className='insta'>{selectedImage.instaName}</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
