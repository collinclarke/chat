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
    const { messages, currentUser } = this.props;
    const ids = Object.keys(messages);
    return ids.map(id => {
      const { message, uid } = messages[id];
      const ownMessage = (currentUser.uid === uid);
      return <Message text={message} key={id} ownMessage={ownMessage}/>
    })
  }

  render() {
    const textColor = (this.state.message === "") ? "text-secondary" : "text-primary";
    return (
      <div className="row">
        <div style={{height: '100vh'}} className="position-fixed d-flex flex-column flex-nowrap justify-content-center w-100">
          <div style={{height: '78vh', overflowY: 'auto'}} className="pr-3 mt-2">
            { this.messageHelper() }
          </div>
        </div>
        <div className="fixed-bottom m-3">
          <form className="row" onSubmit={this.submitMessage}>
            <div className="col-12 w-100">
              <div className="input-group">
                <input onChange={this.handleChange} type="text" ref="chatbar" className="form-control" placeholder="Type here..." aria-label="Type here..." />
                <span className="input-group-btn">
                  <button className={"btn w-100 " + textColor}><span className="oi oi-share" title="share" aria-hidden="true"></span></button>
                </span>
              </div>
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
    if (this.state.message === "") return;
    this.props.sendMessage(messageObject);
    this.setState({message: ""});
    this.refs.chatbar.value = "";
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
