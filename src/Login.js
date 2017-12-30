import React, { Component } from 'react';
import FacebookButton from './FacebookButton';
import logoLarge from './assets/talk_large.svg';

class Login extends Component {
  render() {
    return (
      <div style={{height: '100vh'}} className="d-flex flex-column justify-content-center">
        <div className="row justify-content-center">
          <div className="col-10 text-center">
            <img style={{width: "70vw", maxWidth: "20rem"}} src={logoLarge} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 text-center mt-5">
            <FacebookButton />
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
