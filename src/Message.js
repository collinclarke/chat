import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-8 col-xs-offset-2">
          <div className="message text-center">
            { this.props.text }
          </div>
        </div>
      </div>
    )
  }
}

export default Message;
