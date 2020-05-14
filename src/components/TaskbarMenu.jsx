import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';

const TaskbarMenu = (props) => {

  const [socialsMenuOpen, setSocialsMenuOpen] = useState(false);
  const [docsMenuOpen, setDocsMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const handleMenuMouseEnter = (e) => {
    switch (e.target.id) {
      case 'socials':
        setDocsMenuOpen(false);
        setUserMenuOpen(false);
        return setSocialsMenuOpen(true);
      case 'documents':
        setSocialsMenuOpen(false);
        setUserMenuOpen(false);
        return setDocsMenuOpen(true);
      case 'user':
        setSocialsMenuOpen(false);
        setDocsMenuOpen(false);
        return setUserMenuOpen(true);
      default:
        break
    }
  }

  const handleMenuMouseLeave = (e) => {
    switch (e.target.id) {
      case 'socials':
        return setSocialsMenuOpen(false);
      case 'documents':
        return setDocsMenuOpen(false);
      case 'user':
        return setUserMenuOpen(false);
      default:
        break
    }
  }

  return (
    <div className="home-view__taskbar__menu" ref={props.menuRef}>
      <div className="home-view__taskbar__menu__logo">
        <div className="home-view__taskbar__menu__logo__text">
          Windows<span>95</span>
        </div>
      </div>
      <div className="home-view__taskbar__menu__items">
        <div
          className={!socialsMenuOpen ? "home-view__taskbar__menu__items__item" : "home-view__taskbar__menu__items__item home-view__taskbar__menu__items__item--active"}
          id="socials"
          onMouseEnter={(e) => handleMenuMouseEnter(e)}
          onMouseLeave={(e) => handleMenuMouseLeave(e)}
        >
          <img src={require("../assets/icons/programs.ico")} alt="" /><span><span id="text">Programs</span> <span className="arrow__right"></span></span>
          {socialsMenuOpen && <div className="home-view__taskbar__menu__items__item__sub-menu">
            <div
              className="home-view__taskbar__menu__items__item__sub-menu__item"
            >
              <a
                target="_blank"
                href="https://twitter.com/shadeyRL">
                <img src={require("../assets/icons/twitter.png")} alt="" />
                shadeyRL
                </a>
            </div>
            <div className="home-view__taskbar__menu__items__item__sub-menu__item">
              <a
                target="_blank"
                href="https://github.com/nathan-logan">
                <img src={require("../assets/icons/github.png")} alt="" />
                nathan-logan
                </a>
            </div>
          </div>}
        </div>
        <div
          className={!docsMenuOpen ? "home-view__taskbar__menu__items__item" : "home-view__taskbar__menu__items__item home-view__taskbar__menu__items__item--active"}
          id="documents"
          onMouseEnter={(e) => handleMenuMouseEnter(e)}
          onMouseLeave={(e) => handleMenuMouseLeave(e)}
        >
          <img src={require("../assets/icons/documents.ico")} alt="" /><span><span id="text">Documents</span> <span className="arrow__right"></span></span>
          {docsMenuOpen && <div className="home-view__taskbar__menu__items__item__sub-menu">
            <div
              className="home-view__taskbar__menu__items__item__sub-menu__item"
            >
              <a
                target="_blank"
                href="https://github.com/nathan-logan/react-win95-chat">
                <img src={require("../assets/icons/github.png")} alt="" />
                Source code
                </a>
            </div>
          </div>}
        </div>
        <div
          className={!userMenuOpen ? "home-view__taskbar__menu__items__item" : "home-view__taskbar__menu__items__item home-view__taskbar__menu__items__item--active"}
          id="user"
          onMouseEnter={(e) => handleMenuMouseEnter(e)}
          onMouseLeave={(e) => handleMenuMouseLeave(e)}
        >
          <img src={require("../assets/icons/user.ico")} id="user" alt="" /><span><span id="text">User</span> <span className="arrow__right"></span></span>
          {userMenuOpen && <div
            className="home-view__taskbar__menu__items__item__sub-menu"
          >
            <UserContext.Consumer>
              {
                value => !value ?
                  <React.Fragment>
                    <div className="home-view__taskbar__menu__items__item__sub-menu__item">
                      <Link to="/register">Register</Link>
                    </div>
                    <div className="home-view__taskbar__menu__items__item__sub-menu__item">
                      <Link to="/login">Login</Link>
                    </div>
                  </React.Fragment>
                  :
                  <React.Fragment>
                    <div className="home-view__taskbar__menu__items__item__sub-menu__item">
                      <a>Logged in as: <span>{value.displayName}</span></a>
                    </div>
                    <div className="home-view__taskbar__menu__items__item__sub-menu__item">
                      <Link to="/logout">Logout</Link>
                    </div>
                  </React.Fragment>
              }
            </UserContext.Consumer>
          </div>}
        </div>
        <div className="home-view__taskbar__menu__items__item">
          <img src={require("../assets/icons/shutdown.ico")} alt="" /><span><span id="text">Shutdown</span></span>
        </div>
        <div className="home-view__taskbar__menu__items__item__divider"></div>
      </div>
    </div>
  )
}

export default TaskbarMenu;
