import React, { useState, useContext, useEffect } from 'react';
import { connect } from "react-redux";
import { sendMessage } from '../store/message/actions';
import { UserContext } from '../providers/UserProvider';
import ErrorDialog from './ErrorDialog';

const MessageInputBox = props => {

  const context = useContext(UserContext);

  const [message, setMessage] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    setDisplayName(context && context.displayName)
  }, [context])

  const getTime = () => {
    return new Date();
  }

  const handleKeyDown = e => {
    if (e && e.key !== 'Enter') {
      return;
    };
    e.preventDefault();
    handleSendMessage();
  }

  const handleSendMessage = () => {
    if (!message) {
      setError({ message: "Cannot send blank messages" });
      return;
    };
    if (message.length > 750) {
      setError({ message: "Message was too long" });
      return;
    }
    const payload = {
      content: message,
      from: displayName,
      timeStamp: getTime()
    };
    props.sendMessage(payload);
    setMessage('');
  }

  const handleChange = e => {
    setError(null);
    setMessage(e.target.value);
  }

  return (
    <div className="chat-ui__container__content__message-box">
      {error && <ErrorDialog message={error.message} close={() => setError(null)} />}
      <div className="chat-ui__container__content__message-box__inner">
        <textarea
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={(e) => handleChange(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <div className="chat-ui__container__content__message-box__inner__button">
          <button
            onClick={(e) => handleSendMessage(e)}
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