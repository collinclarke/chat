import React, { Component } from 'react';
import { FeatureRoute } from './routeUtil/routes';
import FacebookButton from './FacebookButton';
import Chatroom from './Chatroom';

class App extends Component {

  login() {
    this.props.loginUser();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xs-12">
            <h1 className="text-center">Welcome to Chat</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 text-center">
            <FacebookButton />
          </div>
        </div>
        <FeatureRoute exact path='/chat' component={ Chatroom } />
      </div>
    );
  }

}

export default App;
