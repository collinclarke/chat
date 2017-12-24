import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessage, watchMessages } from './actions/message_actions';
import Message from './Message';

class Chatroom extends Component {

  constructor() {
    super();
    this.state = {
      message: ""
    }
  }

  messageHelper() {
    const { messages } = this.props;
    const ids = Object.keys(messages);
    return ids.map(id => {
      return <Message text={messages[id]} key={id}/>
    })
  }

  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-sm-12 ">
            { this.messageHelper() }
          </div>
        </div>
        <div className="fixed-bottom">
          <form className="row justify-content-sm-center" onSubmit={this.submitMessage}>
            <div className="col-sm-6 col-sm-offset-2">
              <input onChange={this.handleChange} type="text" className="form-control" placeholder="Type here..." />
            </div>
            <div className="col-sm-2 text-right">
              <button className="btn btn-primary">send</button>
            </div>
          </form>
        </div>
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
  watchMessages(dispatch);
  return {
    sendMessage: (message) => dispatch(sendMessage(message))
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    messages: state.messages
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
