import React from 'react';
import {connect} from "react-redux";

import '../App/App.css';

import { User } from '../../components/User/User';
import { Main } from '../../components/Main/Main';

class App extends React.Component {

  render() {
      return (
          <div className="container">
              <Main setName={this.props.setName}/>
              <User username={this.props.user.name}/>
          </div>
      );
  }
}

// Methods to Get Store

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.mathReducer,    
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setName(name) {
            dispatch({
                type:"SET_NAME",
                payload: name
            });
        }   
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);