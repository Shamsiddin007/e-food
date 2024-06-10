import React, { useState, useEffect } from 'react';
import './VocalSearch.css'


function VocalSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState(null);

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
        // You can add your search logic here, for example:
        // searchFastFoodMenu(transcript);
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

  return (
    <div className="container">
      <button className='bytton' onClick={startListening} disabled={isListening}>
        {isListening ? 'Listening...' : 'Start Voice Search'}
      </button>
      {error && <p className="error">{error}</p>}
      <input
      className='in'
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search fast food..."
      />
      {/* Here you can render your search results based on searchQuery */}
    </div>
  );
}

export default VocalSearch;
