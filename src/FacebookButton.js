import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUserWithFacebook, logoutUser } from './actions/session_actions';

class FacebookButton extends Component {

  render() {
    const { currentUser } = this.props;
    let msg, btnStyle;
    if (currentUser) {
      msg = "Logout";
      btnStyle = "btn btn-default"
    } else {
      msg = "Continue with Facebook";
      btnStyle = "btn btn-primary";
    }
    return (
      <button type="button" onClick={this.sessionAction} className={btnStyle}>{msg}</button>
    )
  }

  sessionAction = () => {
    const { currentUser, login, logout, history} = this.props;
      if (currentUser) {
        logout();
        history.push('/');
      } else {
        login().then(() => {
          history.push('/profile');
        })
      }
  }

}

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(loginUserWithFacebook()),
    logout: () => dispatch(logoutUser())
  };
};

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FacebookButton));
