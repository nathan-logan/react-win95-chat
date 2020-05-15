import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { connectSocket } from './store/socket/actions';

import UserProvider from './providers/UserProvider';

import Desktop from './views/Desktop';
import Login from './views/Login';
import Register from './views/Register';

import './assets/scss/main.scss';

const App = props => {

  useEffect(() => {
    props.connectToSockets();
  }, [])

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Desktop />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    displayName: state.displayName,
  }
};

const mapDispatchToProps = (dispatch) => ({
  connectToSockets: () => dispatch(connectSocket())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
