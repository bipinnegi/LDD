import React, { useState } from 'react';
import InfoPage from './components/InfoPage';// InfoPage component
import XrayUploader from './components/XrayUploader'; // XrayUploader component
import './App.css';
const App = () => {
  const [showUploader, setShowUploader] = useState(false); // State to toggle between pages

  return (
    <div>
      {showUploader ? (
        <XrayUploader /> // Show the XrayUploader component
      ) : (
        <InfoPage onStart={() => setShowUploader(true)} /> // Pass function to toggle
      )}
    </div>
  );
};

export default App;
