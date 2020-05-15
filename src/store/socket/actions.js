export const CONNECTION_CHANGED = 'CONNECTION_CHANGED';
export const CONNECT_SOCKET = 'CONNECT_SOCKET';
export const NEW_CONNECTION = 'NEW_CONNECTION';
export const SEND_CONNECTION_RESPONSE = 'SEND_CONNECTION_RESPONSE';
export const SEND_CONNECTION_REQUEST = 'SEND_CONNECTION_REQUEST';

export const connectionChanged = (isConnected, user) => {
  console.log('connectionChanged user: ', user);
  return {
    type: CONNECTION_CHANGED,
    connected: isConnected,
    user,
    isError: false
  };
}

export const sendIncomingConnection = (displayName) => {
  return {
    type: SEND_CONNECTION_REQUEST,
    displayName
  }
}

export const incomingConnectionReceived = (displayName) => {
  return {
    type: SEND_CONNECTION_RESPONSE,
    displayName
  }
}

export const newUserConnected = (displayName) => {
  return {
    type: NEW_CONNECTION,
    displayName
  }
}

export const connectSocket = () => {
  return {
    type: CONNECT_SOCKET
  };
}