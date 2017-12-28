import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar fixed-top">
        <Link className="navbar-brand" to="/chat" >chat</Link>
        <Link className="navbar-brand m-0" to="/profile" >profile</Link>
      </nav>
    )
  }
}


export default Nav;
