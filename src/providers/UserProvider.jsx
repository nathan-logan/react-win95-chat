import React, { createContext, useState, useEffect } from 'react';
import { auth, generateUserDocument } from '../firebase';
import { connect } from "react-redux";
import { sendIncomingConnection } from "../store/socket/actions";

export const UserContext = createContext({ user: null });

const UserProvider = props => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      const user = await generateUserDocument(userAuth);
      if (!user) return setUser(null);
      props.sendIncomingConnection(user.displayName);
      setUser(user);
    });
    // swap these out to save quota on firebase xD
    // const user = {
    //   uid: "yR50WCPh2SWQRKeZDuuEvi8MBIr2",
    //   email: "nathan@context.gg",
    //   displayName: "guest0001"
    // }
    // setUser(user);
  }, []);

  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  )
}

const mapDispatchToProps = (dispatch) => {
  return { sendIncomingConnection: (displayName: string) => dispatch(sendIncomingConnection(displayName)) }
}

export default connect(null, mapDispatchToProps)(UserProvider);