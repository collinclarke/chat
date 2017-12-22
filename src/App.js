import React, { Component } from 'react';
import FacebookButton from './FacebookButton';

class App extends Component {

  login() {
    this.props.loginUser();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h1 className="text-center">Welcome to Chat</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <FacebookButton />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
