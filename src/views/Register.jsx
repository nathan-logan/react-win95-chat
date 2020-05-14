import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { auth, generateUserDocument } from '../firebase';

const Register = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState(null);

  const handleUserRegistration = async (event, email, password) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, { displayName });
    } catch (error) {
      setError(error);
    };
  }

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'email':
        return setEmail(e.currentTarget.value);
      case 'password':
        return setPassword(e.currentTarget.value);
      case 'displayName':
        return setDisplayName(e.currentTarget.value);
      default:
        break;
    }
  }

  const handleReturnClick = () => {
    return navigate('/');
  }

  return (
    <div className="register-view">
      <div className="register-view__container">
        <div className="register-view__container__title-bar">
          <span className="register-view__container__title-bar__title">Create a Win95Chat user</span>
          <div className="register-view__container__title-bar__icons">
            <div className="register-view__container__title-bar__icons__icon">?</div>
            <div className="register-view__container__title-bar__icons__icon">X</div>
          </div>
        </div>
        <div className="register-view__container__form">
          <div className="register-view__container__form__image">
            <img src={require('../assets/icons/windows_key_icon.ico')} alt="network_icon" />
          </div>
          <div className="register-view__container__form__input">
            <div className="register-view__container__form__input__text">
              Type a name to indentify yourself to Win95Chat. Type a password to secure your account.
              <br /><br />
              Tip: Enter a password that is hard for others to guess.
            </div>
            <div className="login-view__container__form__input__inputs">
              <div className="login-view__container__form__input__inputs__item login-view__container__form__input__inputs__item--displayName">
                <label htmlFor="displayName">Display name:</label>
                <input
                  onChange={(e) => handleChange(e)}
                  type="text"
                  id="displayName"
                  name="displayName"
                  className="login-view__container__form__input"
                  value={displayName}
                />
              </div>
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
          <div className="register-view__container__form__buttons">
            <button
              className="login-view__container__form__buttons__button login-view__container__form__buttons__button--ok"
              onClick={(event) => handleUserRegistration(event, email, password)}
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

export default Register;
