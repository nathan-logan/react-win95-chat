import { CONNECTION_CHANGED, NEW_CONNECTION, SEND_CONNECTION_RESPONSE } from './actions';

const INITIAL_STATE = {
  connected: false,
  connectedUsers: [],
  port: '3001'
}

function socketReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEND_CONNECTION_RESPONSE:
      return {
        ...state,
        connected: true,
        isError: false,
        connectedUsers: [...state.connectedUsers, action.displayName]
      };
    case NEW_CONNECTION:
      return state;
    default:
      return state;
  };
}

export default socketReducer;