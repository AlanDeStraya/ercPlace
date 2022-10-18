import React from 'react';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

import './App.css';

// import weatherRadarFunction from './Scripts/weatherRadar.js';
import Header from './Components/header.js';
import Footer from './Components/footer.js';
import SharepointPlus from './Tabs/sharepointPlus.js';
import Diversion from './Tabs/diversion.js';
import IosReference from './Tabs/iosReference.js';

const socket = io();


function App() {
  const [darkness, setDarkness] = useState();
  const [openTab, setOpenTab] = useState('SharepointPlus');
  const [siteUpdatesPopupActive, setSiteUpdatesPopupActive] = useState(false);
  const [subHeader, setSubHeader] = useState({type: '', content: ''});

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





  const [isConnected, setIsConnected] = useState(socket.connected);

  const [testMode, setTestMode] = useState(false);

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
    });
    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  socket.on('sNumUsersOnline', num => {
    console.log(`${num} users are online`);
  });

  socket.on('sAlert', obj => {
    setSubHeader(() => {
      let prev = Object.assign({}, subHeader);
      prev.type = obj.type;
      prev.content = obj.content;
      return prev;
    });
  });

  let userAlan = '';
  socket.on('sAuthAlan', str => {
    //nope/ok
    if(str === 'nope') {
      setTestMode(false);
    } else if(str === 'ok') {
      setTestMode(true);
    }
  });







  return (
    <div className="App">

      <Header
        darkness={darkness}
        toggleDarkness={toggleDarkness}

        openTab={openTab}
        setOpenTab={setOpenTab}

        socket={socket} />

      { subHeader.type && <h2 id='subHeader' style={subHeader.type ? {backgroundColor: 'yellow', color: 'black'} : {backgroundColor: 'red', color: 'white'} }>{subHeader.content}</h2> }
	{ subHeader.type && <div id='subHeaderSpacer'></div> }

      { openTab === 'SharepointPlus'
        ? <SharepointPlus
          siteUpdatesPopupActive={siteUpdatesPopupActive}
          setSiteUpdatesPopupActive={setSiteUpdatesPopupActive} />
        : openTab === 'Diversion'
        ? <Diversion
            socket={socket}
            testMode={testMode}
            setTestMode={setTestMode}
            subHeader={subHeader}
            setSubHeader={setSubHeader} />
        : <IosReference /> }

      { openTab === 'SharepointPlus' && <Footer
        setSiteUpdatesPopupActive={setSiteUpdatesPopupActive} /> }

    </div>
  );
};

export default App;
