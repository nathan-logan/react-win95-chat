import React from 'react';
import { connect } from 'react-redux';

import ActiveUser from './ActiveUser';

const ActiveUsers = props => {
  return (
    <div className="chat-ui__container__content__active-users">
      <div className="chat-ui__container__content__active-users__inner">
        {props.connectedUsers.map(user => <ActiveUser displayName={user} />)}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    connectedUsers: state.socketState.connectedUsers
  }
}

export default connect(mapStateToProps)(ActiveUsers);