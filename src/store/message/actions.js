export const MESSAGE_SENT = 'MESSAGE_SENT';
export const SEND_MESSAGE_RESPONSE = 'SEND_MESSAGE_RESPONSE';
export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST';

export const messageReceived = (message) => {
  return {
    type: SEND_MESSAGE_RESPONSE,
    message,
  };
}

export const sendMessage = (message) => {
  return {
    type: SEND_MESSAGE_REQUEST,
    message,
  };
}

export const messageSent = () => {
  return {
    type: MESSAGE_SENT
  };
}