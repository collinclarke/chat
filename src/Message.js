import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-sm-8">
          <div className="message text-center">
            { this.props.text }
          </div>
        </div>
      </div>
    )
  }
}

export default Message;
