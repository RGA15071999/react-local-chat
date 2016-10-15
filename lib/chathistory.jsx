'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

export default

class ChatHistory extends React.Component {

  constructor() {
    super();
    this.state = {msgs : [], scrollTop : 0};
  }

  componentWillReceiveProps(_) {
    const panel = this.refs.chat_container;
    if (panel.lastChild) panel.lastChild.scrollIntoView();
  }

  render() {
    let styles = {
      width: '980px',
      overflowY: 'scroll',
      overflowX: 'hidden',
      height: '300px',
      margin: '10px auto',
      padding: '0'
    };
    let listyle = {

      backgroundColor: '#36d1f7',
      borderRadius: '5px',
      color: '#f6fdff',
      margin: '.25rem',
      padding: '.25rem',
      width: '100%',
    };
    let messageList = this.props.messages.map((message, idx) => {
      return (
        <li key={idx} style={this.props.my_style.list_items}>
	         {message}
        </li>
      );
    });

    return (
      <div ref={"chat_container"} style={this.props.my_style.container}>
        {messageList}
      </div>
    );
  }
};
