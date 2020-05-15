import React from 'react';

const ErrorDialog = ({ message, close }) => {
  return (
    <div className="error-box">
      <div className="error-box__title-bar">
        <div className="error-box__title-bar__title">
          <img src={require('../assets/icons/warning.ico')} alt="" />
          <span>Error</span>
        </div>
        <div className="error-box__title-bar__icons">
          <div className="error-box__title-bar__icons__icon" onClick={() => close()}>
            X
          </div>
        </div>
      </div>
      <div className="error-box__content">
        <img src={require('../assets/icons/warning.ico')} alt="" />
        <p>{message}</p>
      </div>
    </div>
  )
}
export default ErrorDialog;