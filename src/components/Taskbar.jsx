import React, { useState, useRef, useEffect } from 'react';

import TaskbarMenu from '../components/TaskbarMenu';
import TaskbarTime from '../components/TaskbarTime';

const Taskbar = () => {

  const node = useRef(null);
  const iconRef = useRef(null);

  const [isOpen, setOpen] = useState(true);

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
      <TaskbarTime />
      {isOpen && <TaskbarMenu menuRef={node} />}
    </div>
  )
}

export default Taskbar;
