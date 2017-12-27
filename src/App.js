import React, { Component } from 'react';
import { FeatureRoute } from './routeUtil/routes';
import { Route } from 'react-router-dom';
import FacebookButton from './FacebookButton';
import Chatroom from './Chatroom';
import Profile from './Profile';


class App extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row fixed-top m-3">
          <div className="col-4 align-self-start">
            <FacebookButton />
          </div>
        </div>
        <Route exact path='/profile' component={ Profile }/>
        <FeatureRoute exact path='/chat' component={ Chatroom } />
      </div>
    );
  }

}

export default App;
