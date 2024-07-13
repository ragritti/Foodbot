import React, { useState } from 'react';
import './Chatbot.css';

function Chatbot() {
  const [minimized, setMinimized] = useState(false);

  const toggleMinimized = () => {
    setMinimized(!minimized);
  };

  return (
    <div className={`chatbot ${minimized ? 'minimized' : ''}`}>
      <button className="toggle-button" onClick={toggleMinimized}>
        {minimized ? '+' : '-'}
      </button>
      {!minimized && (
        <iframe
          width="350"
          height="430"
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/d8b049bd-f50d-45d5-a705-4ee74aa628b2"
          title="Dialogflow Chatbot"
        ></iframe>
      )}
    </div>
  );
}

export default Chatbot;
