'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MsgInput from './MsgInput';
import StatusBar from './StatusBar';
import ChatHistory from './chathistory';
import {server_addr} from './globals';

class ChatApp extends React.Component {

  constructor() {
    super();
    this.state = {msgs : []};
    this.disconnect_user = this.disconnect_user.bind(this);
  }

  async componentDidMount() {
    setInterval(async () => {
      let request = `${server_addr}/all_messages`;
      let messageHistory = await fetch(request);
      let all_history = await messageHistory.json();
      this.setState({msgs: all_history.payload});
    }, 500);

  }

  async disconnect_user() {
    await fetch(`${server_addr}/disconnect`);
  }

  render() {
    let main_container = {
      width: '950px',
      height: '350px',
      margin: '0px auto'
    };
    return (
      <div style = {main_container}>
        <StatusBar />
        <ChatHistory ref="chatHist"   
          messages={this.state.msgs}
          />
        <MsgInput
          updater={(msg) =>
            this.setState({msgs:this.state.msgs.concat([msg])})
          }
          />
      </div>
    );
  }

};


ReactDOM.render(<ChatApp />,
		document.getElementById('react-container'));
