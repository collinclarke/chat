import React, { Component } from 'react';

class Message extends Component {

  componentDidMount() {
    const { container, message, text } = this.refs;
    message.scrollIntoView({block: 'start', behavior: 'smooth'})
    container.style.width = ( text.offsetWidth + 2 )+ 'px';
  }

  render() {
    const { bot } = this.props;

    const bgColor = bot ? "bg-light" : "bg-primary"
    const textColor = bot ? "text-dark" : "text-light"
    const direction = bot ? "justify-content-start" : "justify-content-end";

    return (
      <div className={"m-0 row " + direction}>
        <div className="col-auto mw-100 px-0 a-fade-fast">
          <div ref="message" className={"mx-2 my-1 px-2 d-flex justify-content-center " + bgColor} style={{borderRadius: '1rem', minWidth: '2rem'}}>
            <div ref="container"  className={"text-left m-1 mw-100 " + textColor} >
              <span ref="text" style={{wordWrap: 'break-word', whiteSpace: 'pre-wrap'}} className="mw-100">
                { this.props.text }
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default Message;
