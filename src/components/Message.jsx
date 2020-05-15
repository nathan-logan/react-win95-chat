import React from 'react';

const Message = props => {
  return (
    <span className="message">
      <span className="timestamp">{new Date(props.timeStamp).toLocaleTimeString()}</span>
      {' '}
      <span className="displayName">{props.displayName}:</span> {props.message}</span>
  )
}
export default Message;