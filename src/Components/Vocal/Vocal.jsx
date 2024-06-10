import React, { useState, useEffect } from 'react';
import { FaMicrophone, FaMicrophoneSlash } from 'react-icons/fa';
import './Vocal.css';
import Voce from "/public/icon/people.png"


const products = [
  {
    id: 1,
    name: "Hamburger",
    title: "Burger bulochkasi, tuzlangan bodring, pomidor, go'shtli...",
    price: 1.95,
    img: "/img/gamburger.png",
  },
  {
    id: 2,
    name: "Cheeseburger",
    title: "Burger bulochkasi, tuzlangan bodring, pomidor, go'shtli...",
    price: 2.19,
    img: "/img/chizburger.png",
  },
  {
    id: 3,
    name: "Big Burger",
    title: "Burger bulochkasi, tuzlangan bodring, pomidor, 2 ta go'...",
    price: 3.12,
    img: "/img/bigburger.png",
  },
  {
    id: 4,
    name: "Hot Dog",
    title: "Hot-dog bulochkasi, Kanada sosiskasi, tuzlangan bodring...",
    price: 0.94,
    img: "/img/hotdog.png",
  },
  {
    id: 5,
    name: "Cheese dog",
    title: "Hot-dog bulochkasi, kanada sosiskasi, tuzlangan bodri...",
    price: 2.19,
    img: "/img/chizdog.png",
  },
  {
    id: 6,
    name: "Water",
    title: "",
    price: 0.39,
    img: "/img/suv.png",
  },
];

function VocalSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState(null);
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      setError('Web Speech API is not supported in this browser.');
    }
  }, []);

  const startListening = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        setError(null);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
        setIsListening(false);
        searchFastFoodMenu(transcript); 
      };

      recognition.onerror = (event) => {
        setError('Error occurred in recognition: ' + event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    }
  };

  const toggleListening = () => {
    if (isListening) {
      setIsListening(false);
    } else {
      startListening();
    }
  };

  const searchFastFoodMenu = (transcript) => {
    const foundProduct = products.find(product => product.name.toLowerCase() === transcript.toLowerCase());

    if (foundProduct) {
      setSearchResult(foundProduct);
    } else {
      setSearchResult(null);
    }
  };

  return (
    <div className=" w-9/12 m-auto bg-slate-950 rounded-3xl border-red-800 border-2 borderParent">
      <div className='flex items-center gap-10'>
      <h1 className=' text-3xl sonVoice py-6'>Sound result</h1>
      <img src={Voce} className='w-10' alt="" />
      </div>
      <button onClick={toggleListening} className="mic-button">
        {isListening ? <FaMicrophone /> : <FaMicrophoneSlash />}
      </button>
      {error && <p className="error">{error}</p>}
      <input
        className='in fixed-bottom'
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search fast food..."
      />
      {searchResult ? (
        <div className="product-result soundBorder">
          <h2 className=' text-xl sonVoice'>{searchResult.name}</h2>
          <p  className=' text-xl sonVoice'>{searchResult.title}</p>
          <p  className=' text-2xl sonVoice'>{searchResult.price} $</p>
          <img className=' cursor-pointer' src={searchResult.img} alt={searchResult.name} />
        </div>
      ) : searchQuery && (
        <p className=' text-red-950 text-2xl'>No product found</p>
      )}
    </div>
  );
}

export default VocalSearch;
