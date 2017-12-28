import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveBio } from './actions/session_actions';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bio: "",
      editing: false
    }
  }

  handleChange = e => {
    this.setState({bio: e.currentTarget.value})
  }

  updateBio = e => {
    this.props.saveBio(this.state.bio);
    this.setState({editing: false})
  }

  render() {
    const { photoURL, displayName } = this.props.currentUser;
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-6 text-center">
            <img src={photoURL}
            className="rounded-circle my-3"
            alt="Profile"/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 text-center">
            <h4>{ displayName }</h4>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <textarea onChange={this.handleChange} placeholder="Say something about yourself..."></textarea>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-5 text-center">
            <button type="button" onClick={this.updateBio} className="btn">Update Profile</button>
          </div>
        </div>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => {
  return {
    saveBio: (bio) => dispatch(saveBio(bio))
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
