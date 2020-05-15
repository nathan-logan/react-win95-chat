import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import messageReducer from './message/reducers';
import socketMiddleware from './socket/middleware';

export default createStore(messageReducer, compose(applyMiddleware(socketMiddleware)));