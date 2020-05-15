import React, { useState, useContext, useEffect } from 'react';
import { connect } from "react-redux";
import { sendMessage } from '../store/message/actions';
import { UserContext } from '../providers/UserProvider';

const MessageInputBox = props => {

  const context = useContext(UserContext);

  const [message, setMessage] = useState('');
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    setDisplayName(context && context.displayName)
  }, [context])

  const getTime = () => {
    return new Date();
  }

  const handleSendMessage = () => {
    const payload = {
      content: message,
      from: displayName,
      timeStamp: getTime()
    };
    props.sendMessage(payload);
  }

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  return (
    <div className="chat-ui__container__content__message-box">
      <div className="chat-ui__container__content__message-box__inner">
        <textarea
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={e => handleChange(e)}
        />
        <div className="chat-ui__container__content__message-box__inner__button">
          <button
            onClick={() => handleSendMessage()}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return { sendMessage: (message: { from: string, content: string, timeStamp: string }) => dispatch(sendMessage(message)) }
}

export default connect(null, mapDispatchToProps)(MessageInputBox);