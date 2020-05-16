import { CONNECTION_CHANGED, NEW_CONNECTION, SEND_CONNECTION_RESPONSE, SEND_DISCONNECTION_RESPONSE } from './actions';

const INITIAL_STATE = {
  connected: false,
  connectedUsers: [],
  numConnections: 0,
  port: '3001'
}

function socketReducer(state = INITIAL_STATE, action) {
  console.log('action: ', action);
  switch (action.type) {
    case SEND_CONNECTION_RESPONSE:
      return {
        ...state,
        connected: true,
        isError: false,
        numConnections: action.numConnections,
        connectedUsers: action.connectedUsers
      };
    case SEND_DISCONNECTION_RESPONSE:
      return {
        ...state,
        connected: true,
        isError: false,
        numConnections: state.numConnections - 1,
        connectedUsers: action.connectedUsers
      };
    case NEW_CONNECTION:
      return state;
    default:
      return state;
  };
}

export default socketReducer;