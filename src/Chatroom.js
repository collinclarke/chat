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
      <div className="d-flex align-items-center justify-content-center" style={{height: '100vh'}}>
        <div className="row justify-content-center">
          <div className="col-11 border border-left-0 border-right-0" style={{maxHeight: '80vh', overflowY: 'scroll'}}>
            { this.messageHelper() }
          </div>
        </div>
        <div className="fixed-bottom m-3">
          <form className="row justify-content-sm-center" onSubmit={this.submitMessage}>
            <div className="col-9">
              <input onChange={this.handleChange} type="text" className="form-control" placeholder="Type here..." />
            </div>
            <div className="col-3 text-right">
              <button className="btn"><span className="oi oi-share" title="share" aria-hidden="true"></span></button>
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
