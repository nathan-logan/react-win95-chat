import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';

const TaskbarMenu = (props) => {
  return (
    <div className="home-view__taskbar__menu" ref={props.menuRef}>
      <div className="home-view__taskbar__menu__logo">
        <div className="home-view__taskbar__menu__logo__text">
          Windows<span>95</span>
        </div>
      </div>
      <div className="home-view__taskbar__menu__items">
        <div className="home-view__taskbar__menu__items__item">
          <img src={require("../assets/icons/programs.ico")} alt="" /><span><span id="text">Programs</span> <span className="arrow__right"></span></span>
        </div>
        <div className="home-view__taskbar__menu__items__item">
          <img src={require("../assets/icons/documents.ico")} alt="" /><span><span id="text">Documents</span> <span className="arrow__right"></span></span>
        </div>
        <div className="home-view__taskbar__menu__items__item">
          <img src={require("../assets/icons/user.ico")} id="user" alt="" /><span><span id="text">User</span> <span className="arrow__right"></span></span>
        </div>
        <div className="home-view__taskbar__menu__items__item__divider"></div>
        <div className="home-view__taskbar__menu__items__item">
          <img src={require("../assets/icons/shutdown.ico")} alt="" /><span><span id="text">Shutdown</span></span>
        </div>
      </div>
      {/* <UserContext.Consumer>
        {
          value => !value ?
            <React.Fragment>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </React.Fragment>
            :
            <Link to="/logout">Logout</Link>
        }
      </UserContext.Consumer> */}
    </div>
  )
}

export default TaskbarMenu;
