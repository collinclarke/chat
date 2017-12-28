import React, { Component } from 'react';
import { FeatureRoute, AuthRoute } from './routeUtil/routes';
import { Route } from 'react-router-dom';
import Login from './Login';
import Chatroom from './Chatroom';
import Profile from './Profile';
import Nav from './Nav';

class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <FeatureRoute path='/' component={ Nav }/>
        <AuthRoute exact path="/" component={ Login }/>
        <FeatureRoute exact path='/profile' component={ Profile }/>
        <FeatureRoute exact path='/chat' component={ Chatroom } />
      </div>
    );
  }

}

export default App;
