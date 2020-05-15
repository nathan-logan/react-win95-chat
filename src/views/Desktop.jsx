import React, { useState, useRef, useEffect } from 'react';

import ChatProgram from '../components/ChatProgram';
import Taskbar from '../components/Taskbar';

const HomePage = props => {

  const desktopItemRef = useRef(null);

  const [currentWindow, setCurrentWindow] = useState('win95');
  const [currentWindows, setCurrentWindows] = useState(['win95']);
  const [desktopItemFocus, setDesktopItemFocus] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClicks);
    return () => {
      document.removeEventListener("mousedown", handleClicks);
    };
  }, []);

  // turn off individual desktop item focus if clicked away
  const handleClicks = e => {
    if (desktopItemRef.current && desktopItemRef.current.contains(e.target)) {
      return;
    };
    setDesktopItemFocus(false);
  }

  const handleWindowChange = (id, type) => {
    if (type === 'desktop' && currentWindow === 'win95') return;
    if (currentWindow === id) return setCurrentWindow(null);
    if (currentWindows.some(x => x === id)) {
      return setCurrentWindow(id);
    } else {
      setCurrentWindows([...currentWindows, 'win95']);
      setCurrentWindow(id);
    }
  }

  const handleWindowExit = id => {
    currentWindows.splice(currentWindows.indexOf(id));
    setCurrentWindows(currentWindows);
    setCurrentWindow(null);
  }

  return (
    <div className="home-view">
      <div className="home-view__desktop">
        <div className="home-view__desktop__icons">
          <div
            className={desktopItemFocus ? "home-view__desktop__icons__item home-view__desktop__icons__item--active" : "home-view__desktop__icons__item"}
            ref={desktopItemRef}
            onClick={() => setDesktopItemFocus(true)}
            onDoubleClick={() => handleWindowChange('win95', 'desktop')}
          >
            <img src={require("../assets/icons/chat.ico")} alt="" />
            <span>Win95Chat</span>
          </div>
        </div>
        <div className="home-view__desktop__current-window">
          {
            currentWindow === 'win95' &&
            <ChatProgram
              minimizeWindow={handleWindowChange}
              exitWindow={handleWindowExit}
            />
          }
        </div>
      </div>
      <Taskbar
        currentWindow={currentWindow}
        currentWindows={currentWindows}
        changeCurrentWindow={
          id => handleWindowChange(id)
        }
      />
    </div>
  )
}

export default HomePage;
