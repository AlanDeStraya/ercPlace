import React from 'react';
import './App.css';
// import weatherRadarFunction from './Scripts/weatherRadar.js';
import Header from './Components/header.js';
import Footer from './Components/footer.js';
import SharepointPlus from './Tabs/sharepointPlus.js';
import { useState, useEffect } from 'react';

function App() {
  const [darkness, setDarkness] = useState();

  // const darkMode = window.matchMedia
  useEffect(() => {
    setDarkness(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }, [/*darkMode*/]);

  function toggleDarkness(mode) {
    setDarkness(mode);
    if(mode === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  //weatherRadarFunction();

  return (
    <div className="App">

      <Header
	darkness={darkness}
	toggleDarkness={toggleDarkness} />

      <SharepointPlus />

      <Footer />

    </div>
  );
};

export default App;
