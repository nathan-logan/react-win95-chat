import React from 'react';

const TaskbarTime = () => {
  return (
    <div className="home-view__taskbar__time">
      <img src={require("../assets/icons/volume_icon.ico")} />
      <span>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
    </div>
  )
}

export default TaskbarTime;
