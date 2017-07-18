import backendCheck from './backend_helper';
import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import App from './main';
import allReducers from './all_reducers';

backendCheck();

const middleware = applyMiddleware(promise(), thunk, createLogger());

const store = createStore(allReducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));
