import * as io from 'socket.io-client';
import { userConnected } from "../message/actions";

const EVENTS = {
  CONNECT: 'connect',
  NEW_CONNECTION: 'new_connection',
  NEW_DISCONNECTION: 'new_disconnection',
  DISCONNECT: 'disconnect',
  MESSAGE: 'message'
};

export default class Socket {
  user;
  port;
  onChange;
  onMessage;
  onDisconnection;
  socket;

  constructor(onChange, onMessage, onConnection, onDisconnection) {
    this.onChange = onChange;
    this.onMessage = onMessage;
    this.onConnection = onConnection;
    this.onDisconnection = onDisconnection;
    this.socket = '';
    this.user = '';
    this.port = '';
  }

  connect = (user, port) => {
    this.user = user;
    this.port = port;

    // const host = `http://192.168.0.220:${port}`; // Running from local network
    // this.socket = io.connect(host);
    this.socket = io.connect(); // Running from Heroku

    this.socket.on(EVENTS.CONNECT, this.onConnected);
  }

  onConnected = () => {
    this.socket.on(EVENTS.NEW_DISCONNECTION, this.onDisconnection);
    this.socket.on(EVENTS.NEW_CONNECTION, this.onConnection);
    this.socket.on(EVENTS.MESSAGE, this.onMessage);
  }

  sendIncomingConnection = (user) => {
    console.log('sendIncomingConnection: ', user);
    if (typeof this.socket.emit === 'function') {
      this.socket.emit(EVENTS.NEW_CONNECTION, user)
    } else {
      console.error('Cannot emit socket connections. Socket.io not connected.');
    }
  }

  // runs when a user disconnects from the chat room
  sendIncomingDisconnection = (user) => {
    console.log('sendIncomingDisconnection: ', user);
    if (typeof this.socket.emit === 'function') {
      this.socket.emit(EVENTS.NEW_DISCONNECTION, user)
    } else {
      console.error('Cannot emit socket connections. Socket.io not connected.');
    }
  }

  sendMessage = (message) => {
    if (typeof this.socket.emit === 'function') {
      this.socket.emit(EVENTS.MESSAGE, message)
    } else {
      console.error('Cannot emit socket messages. Socket.io not connected.');
    }
  }

  disconnect = () => this.socket.close();
}