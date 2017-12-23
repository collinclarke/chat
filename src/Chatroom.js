import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from './actions/message_actions'


class Chatroom extends Component {

  constructor() {
    super();
    this.state = {
      message: ""
    }
  }

  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-xs-12 text-center">
            messages go here
          </div>
        </div>
        <form className="row" onSubmit={this.submitMessage}>
          <div className="col-xs-6 col-xs-offset-2">
            <input onChange={this.handleChange} type="text" className="form-control" placeholder="Type here..." />
          </div>
          <div className="col-xs-1">
            <button className="btn btn-primary">send</button>
          </div>
        </form>
      </div>
    )
  }

  submitMessage = (e) => {
    e.preventDefault();
    const messageObject = {
      uid: this.props.currentUser.uid,
      message: this.state.message
    }
    this.props.sendMessage(messageObject);
  }

  handleChange = e => {
    this.setState({message: e.currentTarget.value})
  }

}

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: (message) => dispatch(sendMessage(message))
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
