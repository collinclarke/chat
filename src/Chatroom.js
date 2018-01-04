import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessage, watchMessages } from './actions/message_actions';
import Message from './Message';
import loadingSVG from './assets/dots.svg';


class Chatroom extends Component {

  constructor() {
    super();
    this.state = {
      message: ""
    }
  }

  messageHelper() {
    const { messages, currentUser, loading } = this.props;
    const ids = Object.keys(messages);
    const msgs = ids.map(id => {
      const { message, bot } = messages[id];
      return <Message text={message} key={id} bot={bot}/>
    })
    if (loading) {
      msgs.push(<Message text={<img style={{width: "60px", height: "18px", objectFit: "cover", paddingBottom: "2px"}} src={loadingSVG} />} key="typing" bot={true}/>)
    }
    return msgs;
  }

  render() {
    const textColor = (this.state.message === "") ? "text-secondary" : "text-primary";
    return (
      <div className="row">
        <div style={{height: '100vh'}} className="position-fixed d-flex flex-column flex-nowrap justify-content-center w-100">
          <div style={{position: 'fixed', top: '70px', bottom: '70px', overflowY: 'auto'}} className="w-100 px-3 pt-2 mt-2 border border-left-0 border-right-0 border-bottom-0 a-fade">
            { this.messageHelper() }
          </div>
        </div>
        <div className="fixed-bottom m-3">
          <form className="row" onSubmit={this.submitMessage}>
            <div className="col-12 w-100">
              <div className="input-group">
                <input onChange={this.handleChange} type="text" ref="chatbar" className="form-control border-0" placeholder="Type here..." aria-label="Type here..." />
                <span className="input-group-btn">
                  <button className={"btn btn-light w-100 " + textColor}><span className="oi oi-share" title="share" aria-hidden="true"></span></button>
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
    messages: state.messages,
    loading: state.ui.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
