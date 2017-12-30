import React, { Component } from 'react';

class Message extends Component {

  componentDidMount() {
    this.refs.message.scrollIntoView({block: 'start', behavior: 'smooth'})
  }

  render() {
    const { ownMessage } = this.props;

    const bgColor = ownMessage ? "bg-primary" : "bg-secondary"
    const direction = ownMessage ? "justify-content-end" : "justify-content-start";

    return (
      <div className={"m-0 row " + direction}>
        <div className="col-auto mw-100 px-0">
          <div ref="message" className={"mx-2 my-1 px-2 d-flex justify-content-center " + bgColor} style={{borderRadius: '1rem', minWidth: '2rem'}}>
            <div style={{wordBreak: 'break-all'}} className="text-left text-light m-1"> { this.props.text } </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Message;
