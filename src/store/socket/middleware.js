import Socket from "./Socket";
import {
  CONNECT_SOCKET,
  CONNECTION_CHANGED,
  SEND_CONNECTION_REQUEST,
  SEND_DISCONNECTION_REQUEST,
  connectionChanged,
  newUserConnected,
  incomingConnectionReceived,
  disconnectRequestReceived,
} from "./actions";
import {
  messageReceived,
  messageSent,
  SEND_MESSAGE_REQUEST
} from "../message/actions";

const socketMiddleware = (store) => {

  const onIncomingDisconnection = (user) => store.dispatch(disconnectRequestReceived(user));

  const onIncomingConnection = (payload) => store.dispatch(incomingConnectionReceived(payload));

  const onConnectionChange = (isConnected, user) => store.dispatch(connectionChanged(isConnected, user));

  const onIncomingMessage = (message) => store.dispatch(messageReceived(message));

  const socket = new Socket(onConnectionChange, onIncomingMessage, onIncomingConnection, onIncomingDisconnection);

  return (next) => (action) => {
    console.log('middleware action: ', action);
    const messageState = store.getState().messageState;
    const socketState = store.getState().socketState;

    switch (action.type) {
      case CONNECT_SOCKET:
        socket.connect(messageState.displayName, 3001);
        break;
      case SEND_CONNECTION_REQUEST:
        if (action.displayName === 'guest') return;
        socket.sendIncomingConnection(action.displayName);
        break;
      case SEND_DISCONNECTION_REQUEST:
        if (action.displayName === 'guest') return;
        socket.sendIncomingDisconnection(action.displayName);
        break;
      case SEND_MESSAGE_REQUEST:
        socket.sendMessage(action.message);
        store.dispatch(messageSent());
        break;
      default:
        break;
    }

    return next(action)
  };
}

export default socketMiddleware;