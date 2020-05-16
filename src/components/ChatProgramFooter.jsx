import React from 'react';
import { connect } from 'react-redux';

const ChatProgramFooter = props => {
  return (
    <div className="chat-ui__container__footer">
      <span>For help, go get some LOOOL</span><span>{props.numConnections} Chatters in Conversation</span>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numConnections: state.socketState.numConnections
  }
}

export default connect(mapStateToProps)(ChatProgramFooter);