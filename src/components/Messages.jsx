import React from 'react';
import { connect } from 'react-redux';

import Message from './Message';

const Messages = props => {
  console.log('props: ', props);

  return (
    <div className="chat-ui__container__content__messages">
      <div className="chat-ui__container__content__messages__inner">
        {props.messages.map(msg => <Message displayName={msg.from} message={msg.content} timeStamp={msg.timeStamp} />)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  messages: state.messages
})

export default connect(mapStateToProps)(Messages);