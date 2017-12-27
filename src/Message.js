import React, { Component } from 'react';

class Message extends Component {
  constructor( props ) {
    super(props);
  }

  componentDidMount() {
    this.refs.message.scrollIntoView({block: 'start', behavior: 'smooth'})
  }

  render() {
    return (
      <div className="row justify-content-end">
        <div className="col-auto mw-100">
          <div ref="message" className="text-right rounded bg-primary m-2 p-2 text-light">
            { this.props.text }
          </div>
        </div>
      </div>
    )
  }
}

export default Message;
