import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logoSmall from './assets/talk_small.svg';

class Nav extends Component {
  render() {
    const {photoURL} = this.props.currentUser;
    return (
      <nav className="navbar fixed-top pt-0">
        <Link className="navbar-brand" to="/chat" >
          <img style={{width: "3rem"}} src={logoSmall}/>
        </Link>
        <Link className="m-0" to="/profile" >
          <img src={photoURL}
          style={{width: "3rem"}}
          className="rounded-circle my-3"
          alt="Profile"/>
        </Link>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  }
}

export default connect(mapStateToProps, null)(Nav);
