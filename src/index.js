import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';
import ThunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({ searchRobots, requestRobots })
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();