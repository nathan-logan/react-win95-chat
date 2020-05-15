import Socket from "./Socket";
import { CONNECT_SOCKET, connectionChanged } from "./actions";
import { messageReceived, messageSent, SEND_MESSAGE_REQUEST } from "../message/actions";

const socketMiddleware = (store) => {

  const onConnectionChange = (isConnected) => {
    store.dispatch(connectionChanged(isConnected));
  }

  const onIncomingMessage = (message) => store.dispatch(messageReceived(message));

  const socket = new Socket(onConnectionChange, onIncomingMessage);

  return (next) => (action) => {
    console.log('action in middleware: ', action);
    const messageState = store.getState();

    switch (action.type) {
      case CONNECT_SOCKET:
        socket.connect(messageState.displayName, 3001);
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