'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

export default

class ChatHistory extends React.Component {
  constructor() {
    super();
    this.state = {msgs : [], scrollTop : 0};
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
    let messageList = this.props.messages.map(function(message) {
      return (
        <li style = {listyle}>{message}</li>
      );
    });
    return (
      <ul id = 'test' style = {styles}>
        {messageList}
      </ul>
    );
  }
};
