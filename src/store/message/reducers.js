import { SEND_MESSAGE_RESPONSE, MESSAGE_SENT } from './actions';

const INITIAL_STATE = {
  displayName: 'guest0001',
  messages: []
}

const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEND_MESSAGE_RESPONSE:
      const isMessageTypeSent = (action.message.from === state.displayName);
      action.message = Object.assign(action.message, { type: isMessageTypeSent ? 'sent' : 'received' });
      return {
        ...state,
        messages: [...state.messages, action.message]
      };
    case MESSAGE_SENT:
    default:
      return state;
  };
}

export default messageReducer;