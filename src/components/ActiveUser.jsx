import React from 'react';

const ActiveUser = props => {
  return (
    <div className="chat-ui__container__content__active-users__inner__user">
      <img src={require("../assets/icons/dialog.ico")} alt="" />
      <span>{props.displayName}</span>
    </div>
  )
}
export default ActiveUser;