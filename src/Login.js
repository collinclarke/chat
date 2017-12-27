import React, { Component } from 'react';
import FacebookButton from './FacebookButton';

class Login extends Component {
  render() {
    return (
      <div className="row fixed-top m-3">
        <div className="row">
          <div className="col-4 align-self-start">
            <FacebookButton />
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
