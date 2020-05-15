import React from 'react';
import ActiveUser from './ActiveUser';

const ActiveUsers = () => {
  return (
    <div className="chat-ui__container__content__active-users">
      <div className="chat-ui__container__content__active-users__inner">
        <ActiveUser
          displayName="guest0001"
        />
      </div>
    </div>
  )
}
export default ActiveUsers;