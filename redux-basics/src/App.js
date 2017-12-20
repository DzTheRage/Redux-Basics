import React, { Component } from 'react';
import { createStore } from "redux";
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

const initialState = {
  result: 1,
  lastValues: [],
  username: "Max"
}

const reducer = (state = initialState, action) => {
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

const store = createStore(reducer);

store.subscribe(() => {
  console.log("Store update!", store.getState())
});

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