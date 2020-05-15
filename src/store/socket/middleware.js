import Socket from "./Socket";
import { CONNECT_SOCKET, SEND_CONNECTION_REQUEST, connectionChanged, CONNECTION_CHANGED, newUserConnected, incomingConnectionReceived } from "./actions";
import { messageReceived, messageSent, SEND_MESSAGE_REQUEST } from "../message/actions";

const socketMiddleware = (store) => {

  const onIncomingConnection = (user) => store.dispatch(incomingConnectionReceived(user));

  const onConnectionChange = (isConnected, user) => {
    store.dispatch(connectionChanged(isConnected, user));
  }

  const onIncomingMessage = (message) => store.dispatch(messageReceived(message));

  const socket = new Socket(onConnectionChange, onIncomingMessage, onIncomingConnection);

  return (next) => (action) => {
    console.log('action: ', action);
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