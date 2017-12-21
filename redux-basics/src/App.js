import React, { Component } from 'react';
// REDUX IMPORTS
import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from 'redux-logger'
import 
// END
import logo from './logo.svg';
import './App.css';

import { User } from './components/User/User';
import { Main } from './components/Main/Main';

class App extends React.Component {
  constructor() {
      super();
      this.state = {
          username: "Max"
      };
      this.changeUsername = this.changeUsername.bind(this);
  }

  changeUsername(newName) {
      this.setState({
          username: newName
      });
  }

  render() {
      return (
          <div className="container">
              <Main changeUsername={this.changeUsername}/>
              <User username={this.state.username}/>
          </div>
      );
  }
}

export default App;

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
  console.log("Store update!", store.getState())
});

// Actions 
store.dispatch({
  type: "ADD",
  payload: 10
});

store.dispatch({
  type: "ADD",
  payload: 9,
});

store.dispatch({
  type: "SUBTRACT",
  payload: 10
});

store.dispatch({
  type: "SET_NAME",
  payload: "Scotty V"
});

store.dispatch({
  type: "SET_AGE",
  payload: 23
});