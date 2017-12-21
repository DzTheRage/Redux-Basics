// Base 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

// REDUX IMPORTS
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger';
import {Provider} from "react-redux";

// Multiple Reducers

const mathReducer = (state = {
    result: 1,
    lastValues: [],
  }, action) => {
    switch (action.type) {
      case "ADD":
        state = {
            ...state,
            result: state.result + action.payload,
            lastValues: [...state.lastValues, action.payload]
          };
        break;
      case "SUBTRACT":
        state = {
          ...state,
          result: state.result - action.payload,
          lastValues: [...state.lastValues, action.payload]
        };
        break;
    }
    return state;
  };
  
  const userReducer = (state = {
      name: "Scott",
      age: 22,
  }, action) => {
    switch (action.type) {
      case "SET_NAME":
        state = {
            ...state,
            name: action.payload,
          };
        break;
      case "SET_AGE":
        state = {
          ...state,
          age: action.payload
        };
        break;
    }
    return state;
  };
  
  // Creating Middleware
  
  const myLogger = (store) => (next) => (action) => {
    console.log("Logged Action: ", action);
    next(action);
  }
  
  // Store
  const store = createStore(combineReducers(
    {mathReducer, userReducer}), 
    {}, 
    applyMiddleware(logger));
  
  // Console for Debug
  store.subscribe(() => {
   // console.log("Store update!", store.getState())
  });
  
  // Actions 


  // Rendering APP

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();
