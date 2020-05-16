export const CONNECTION_CHANGED = 'CONNECTION_CHANGED';
export const CONNECT_SOCKET = 'CONNECT_SOCKET';
export const NEW_CONNECTION = 'NEW_CONNECTION';
export const NEW_DISCONNECTION = 'NEW_DISCONNECTION';
export const SEND_CONNECTION_REQUEST = 'SEND_CONNECTION_REQUEST';
export const SEND_CONNECTION_RESPONSE = 'SEND_CONNECTION_RESPONSE';
export const SEND_DISCONNECTION_REQUEST = 'SEND_DISCONNECTION_REQUEST';
export const SEND_DISCONNECTION_RESPONSE = 'SEND_DISCONNECTION_RESPONSE';

export const connectionChanged = (isConnected, user) => {
  return {
    type: CONNECTION_CHANGED,
    connected: isConnected,
    user,
    isError: false
  };
}

export const sendIncomingDisconnection = (displayName) => {
  return {
    type: SEND_DISCONNECTION_REQUEST,
    displayName
  }
}

export const disconnectRequestReceived = (payload) => {
  console.log('payload: ', payload);
  return {
    type: SEND_DISCONNECTION_RESPONSE,
    displayName: payload.displayName,
    numConnections: payload.numConnections,
    connectedUsers: payload.activeUsers
  }
}

export const newDisconnection = (payload) => {
  return {
    type: NEW_DISCONNECTION,
    displayName: payload.displayName,
    numConnections: payload.numConnections,
    connectedUsers: payload.activeUsers
  }
}

export const sendIncomingConnection = (displayName) => {
  return {
    type: SEND_CONNECTION_REQUEST,
    displayName
  }
}

export const incomingConnectionReceived = (payload) => {
  return {
    type: SEND_CONNECTION_RESPONSE,
    displayName: payload.displayName,
    numConnections: payload.numConnections,
    connectedUsers: payload.activeUsers
  }
}

export const newUserConnected = (payload) => {
  return {
    type: NEW_CONNECTION,
    displayName: payload.user,
    numConnections: payload.numConnections,
    connectedUsers: payload.activeUsers
  }
}

export const connectSocket = () => {
  return {
    type: CONNECT_SOCKET
  };
}