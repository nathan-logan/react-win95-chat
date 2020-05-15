import React, { useState, useRef, useEffect } from 'react';

import TaskbarMenu from '../components/TaskbarMenu';
import TaskbarTime from '../components/TaskbarTime';

const Taskbar = props => {

  const node = useRef(null);
  const iconRef = useRef(null);

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClicks);
    return () => {
      document.removeEventListener("mousedown", handleClicks);
    };
  }, []);

  const handleMenuOpen = () => {
    setOpen(!isOpen);
  }

  const handleClicks = e => {
    if (node.current && node.current.contains(e.target) || iconRef.current && iconRef.current.contains(e.target)) {
      return;
    };
    setOpen(false);
  }

  const handleTaskbarProgramClicked = e => {
    props.changeCurrentWindow(e.target.id);
  }

  return (
    <div className="home-view__taskbar">
      <div
        className={isOpen ? "home-view__taskbar__menu-icon home-view__taskbar__menu-icon--open" : "home-view__taskbar__menu-icon"}
        onClick={() => handleMenuOpen()}
        ref={iconRef}
      >
        <img src={require("../assets/icons/windows_logo.ico")} />
          Start
      </div>
      <div className="home-view__taskbar__current-programs">
        {
          props.currentWindows.some(x => x === 'win95') && <div
            className={props.currentWindow === "win95"
              ?
              "home-view__taskbar__current-programs__item home-view__taskbar__current-programs__item--active"
              :
              "home-view__taskbar__current-programs__item"
            }
          >
            <div
              className="home-view__taskbar__current-programs__item--click-boundary"
              id="win95"
              onClick={(e) => handleTaskbarProgramClicked(e)}
            >
            </div>
            <img
              src={require("../assets/icons/chat.ico")}
              alt=""
            />
            <span>Win95Chat</span>
          </div>
        }
      </div>
      <TaskbarTime />
      {isOpen && <TaskbarMenu menuRef={node} />}
    </div>
  )
}

export default Taskbar;
