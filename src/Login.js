import React, { Component } from 'react';
import FacebookButton from './FacebookButton';

class Login extends Component {
  render() {
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-10 text-center">
            <h3>Welcome to Chat</h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 text-center">
            <FacebookButton />
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
