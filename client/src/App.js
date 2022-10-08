import React from 'react';
import { useState, useEffect } from 'react';


import './App.css';

// import weatherRadarFunction from './Scripts/weatherRadar.js';
import Header from './Components/header.js';
import Footer from './Components/footer.js';
import SharepointPlus from './Tabs/sharepointPlus.js';
import Diversion from './Tabs/diversion.js';
import IosReference from './Tabs/iosReference.js';

function App() {
  const [darkness, setDarkness] = useState();
  const [openTab, setOpenTab] = useState('SharepointPlus');
	const [siteUpdatesPopupActive, setSiteUpdatesPopupActive] = useState(false);

  useEffect(() => {
    toggleDarkness(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }, []);

  function toggleDarkness(mode) {
    setDarkness(mode);
    if(mode === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };


  // weatherRadarFunction();


  return (
    <div className="App">

      <Header
        darkness={darkness}
        toggleDarkness={toggleDarkness}
        openTab={openTab}
        setOpenTab={setOpenTab} />

      { openTab === 'SharepointPlus'
        ? <SharepointPlus
          siteUpdatesPopupActive={siteUpdatesPopupActive}
          setSiteUpdatesPopupActive={setSiteUpdatesPopupActive} />
        : openTab === 'Diversion'
        ? <Diversion />
        : <IosReference /> }

      { openTab === 'SharepointPlus' && <Footer
        setSiteUpdatesPopupActive={setSiteUpdatesPopupActive} /> }

    </div>
  );
};

export default App;
