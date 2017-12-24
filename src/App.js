import React, { Component } from 'react';
import { FeatureRoute } from './routeUtil/routes';
import FacebookButton from './FacebookButton';
import Chatroom from './Chatroom';
import Profile from './Profile';

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <h1 className="text-center">Welcome to Chat</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center">
            <FacebookButton />
          </div>
        </div>
        <FeatureRoute exact path='/chat' component={ Chatroom } />
        <FeatureRoute exact path='/profile' component={ Profile }/>
      </div>
    );
  }

}

export default App;
