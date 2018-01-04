import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveBio } from './actions/session_actions';
import FacebookButton from './FacebookButton';

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
      <div className="a-fade">
        <div className="row justify-content-center">
          <div className="col-12 text-center mb-2">
            <textarea rows="5" className="col-11 col-lg-6 text-center" onChange={this.handleChange} value={this.state.bio} placeholder="Say something about yourself..."></textarea>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-5 text-center">
            <button type="button" onClick={this.updateBio} className="btn btn-primary a-fade">Update Profile</button>
          </div>
        </div>
      </div>
    )
  }

  displayBio() {
    const { bio } = this.state;
    return (
      <div className="a-fade">
        <div className="row justify-content-center">
          <div className="col-6 text-center">
            <h6>About Me  <span onClick={this.startEditing} className="oi oi-cog text-primary" title="cog" aria-hidden="true"></span> </h6>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 col-md-5 text-center">
            <p>{bio}</p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { photoURL, displayName } = this.props.currentUser;
    const { editing } = this.state;
    return (
      <div style={{height: '100vh'}} className="d-flex flex-column justify-content-center">
        <div className="row justify-content-center">
          <div className="col-6 text-center a-fade mb-3">
            <img src={photoURL}
            className="rounded-circle"
            alt="Profile"/>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 text-center mb-3 a-fade">
            <h4>{ displayName }</h4>
          </div>
        </div>
        { editing ? this.updateField() : this.displayBio() }
        <div className="row justify-content-center">
          <div className="col-10 text-center mt-6">
            <FacebookButton />
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
