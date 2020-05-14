import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { signInWithEmailPassword, auth } from '../firebase';

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleUserSignin = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError('Sorry, there was an error signing in..');
      console.log('Error signing in', error);
    })
  }

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'email':
        return setEmail(e.currentTarget.value);
      case 'password':
        return setPassword(e.currentTarget.value);
      default:
        break;
    }
  }

  const handleReturnClick = () => {
    return navigate('/');
  }

  return (
    <div className="login-view">
      <div className="login-view__container">
        <div className="login-view__container__title-bar">
          <span className="login-view__container__title-bar__title">Welcome to Win95Chat</span>
          <div className="login-view__container__title-bar__icons">
            <div className="login-view__container__title-bar__icons__icon">?</div>
            <div className="login-view__container__title-bar__icons__icon">X</div>
          </div>
        </div>
        <div className="login-view__container__form">
          <div className="login-view__container__form__image">
            <img src={require('../assets/icons/network_icon.ico')} alt="network_icon" />
          </div>
          <div className="login-view__container__form__input">
            <div className="login-view__container__form__input__text">
              Type a user name and password to log on to Win95Chat.
            </div>
            <div className="login-view__container__form__input__inputs">
              <div className="login-view__container__form__input__inputs__item login-view__container__form__input__inputs__item--email">
                <label htmlFor="email">Email:</label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="email"
                  id="email"
                  name="email"
                  className="login-view__container__form__input"
                  value={email}
                />
              </div>
              <div className="login-view__container__form__input__inputs__item login-view__container__form__input__inputs__item--password">
                <label htmlFor="password">Password:</label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="password"
                  id="password"
                  name="password"
                  className="login-view__container__form__input"
                  value={password}
                />
              </div>
            </div>
          </div>
          <div className="login-view__container__form__buttons">
            <button
              className="login-view__container__form__buttons__button login-view__container__form__buttons__button--ok"
              onClick={(event) => handleUserSignin(event, email, password)}
            >
              OK
            </button>
            <button
              className="login-view__container__form__buttons__button login-view__container__form__buttons__button--cancel"
              onClick={() => handleReturnClick()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
