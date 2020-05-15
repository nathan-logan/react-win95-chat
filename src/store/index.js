import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import messageReducer from './message/reducer';
import socketReducer from './socket/reducer';
import socketMiddleware from './socket/middleware';

const reducers = combineReducers({
  messageState: messageReducer,
  socketState: socketReducer
})

export default createStore(reducers, compose(applyMiddleware(socketMiddleware)));