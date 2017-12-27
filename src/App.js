import React, { Component } from 'react';
import { FeatureRoute, AuthRoute } from './routeUtil/routes';
import { Route } from 'react-router-dom';
import Login from './Login';
import Chatroom from './Chatroom';
import Profile from './Profile';


class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <AuthRoute exact path="/login" component={ Login }/>
        <FeatureRoute exact path='/profile' component={ Profile }/>
        <FeatureRoute exact path='/chat' component={ Chatroom } />
      </div>
    );
  }

}

export default App;
