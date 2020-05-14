import React from 'react';

import ChatProgram from '../components/ChatProgram';
import Taskbar from '../components/Taskbar';

const HomePage = props => {
  return (
    <div className="home-view">
      <div className="home-view__desktop">
        <ChatProgram />
      </div>
      <Taskbar />
    </div>
  )
}

export default HomePage;
