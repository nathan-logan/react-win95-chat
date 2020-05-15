import React from 'react';

import ActiveUsers from './ActiveUsers';
import ChatProgramTitleBar from './ChatProgramTitleBar';
import MessageInputBox from './MessageInputBox';
import Messages from './Messages';
import ChatProgramFooter from './ChatProgramFooter';

const ChatProgram = ({ minimizeWindow, exitWindow }) => {
  return (
    <div className="chat-ui">
      <div className="chat-ui__container">
        <ChatProgramTitleBar
          minimizeWindow={minimizeWindow}
          exitWindow={exitWindow}
        />
        <div className="chat-ui__container__content">
          <div className="chat-ui__container__content__top">
            <div className="chat-ui__container__content__top__left">
              <Messages />
              <MessageInputBox />
            </div>
            <div className="chat-ui__container__content__top__right">
              <ActiveUsers />
            </div>
          </div>
          <ChatProgramFooter />
        </div>
      </div>
    </div>
  )
}

export default ChatProgram;
