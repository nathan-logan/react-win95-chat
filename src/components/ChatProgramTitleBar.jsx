import React from 'react';

const ChatProgramTitleBar = ({ minimizeWindow, exitWindow }) => {
  return (
    <div className="chat-ui__container__title-bar">
      <span className="chat-ui__container__title-bar__title"><img src={require("../assets/icons/chat.ico")} alt="" /> Win95Chat</span>
      <div className="chat-ui__container__title-bar__icons">
        <div className="chat-ui__container__title-bar__icons__icon" id="minimize"
          onClick={() => minimizeWindow('win95')}
        >
          <span>_</span>
        </div>
        <div className="chat-ui__container__title-bar__icons__icon" id="maximize"><span>☐</span></div>
        <div
          className="chat-ui__container__title-bar__icons__icon"
          onClick={() => exitWindow('win95')}
        >
          <span>X</span>
        </div>
      </div>
    </div>
  )
}
export default ChatProgramTitleBar;