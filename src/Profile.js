import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from './actions/session_actions';

class Profile extends Component {

  render() {
    const { photoURL } = this.props.currentUser;
    return (
      <div className="row justify-content-center">
        <div className="col-3">
          <img src={photoURL}
          className="rounded-circle"
          alt="Profile"/>
        </div>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    updateProfile: (data) => dispatch(updateProfile(data))
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
