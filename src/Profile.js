import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveBio } from './actions/session_actions';

class Profile extends Component {

  constructor(props) {
    super(props);
    const { currentUser } = props;
    this.state = {
      bio: currentUser.bio,
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

  startEditing = e => {
    this.setState({editing: true});
  }

  updateField() {
    return (
      <div>
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <textarea onChange={this.handleChange} value={this.state.bio} placeholder="Say something about yourself..."></textarea>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-5 text-center">
            <button type="button" onClick={this.updateBio} className="btn">Update Profile</button>
          </div>
        </div>
      </div>
    )
  }

  displayBio() {
    const { bio } = this.state;
    return (
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <p>{bio}</p>
        </div>
        <button type="button" onClick={this.startEditing} className="btn btn-primary">Edit</button>
      </div>
    )
  }

  render() {
    const { photoURL, displayName } = this.props.currentUser;
    const { editing } = this.state;
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
        { editing ? this.updateField() : this.displayBio() }
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
