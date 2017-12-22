import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUserWithFacebook } from './actions/session_actions';

class FacebookButton extends Component {
  render() {
    return (
      <button type="button" onClick={this.props.login} className="btn btn-primary">Continue with Facebook</button>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(loginUserWithFacebook()),
  };
};

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FacebookButton);
