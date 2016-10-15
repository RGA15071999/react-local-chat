"use strict";

import React from "react";
import {server_addr} from './globals';

export default
class StatusBar extends React.Component{

  constructor(){
    super();
    this.state = {usersNumber : 0};
  }

   componentDidMount(){
    setInterval(async()=>{
    const resp = await fetch(`${server_addr}/users`);
    const users = await resp.json();
    if (users != this.state.usersNumber)
      this.setState({usersNumber: users});

    if (users != this.state.usersNumber)
	   this.setState({usersNumber: users});

    }, 4000);
  }

  render(){
    return(
      <div style={this.props.my_style}>
        <h1>
	  <center>
	    <a href={'https://iteratehackerspace.github.io'}>
  		<img style={this.props.my_style.logo}
            src="https://ceremoniesbykatherine.files.wordpress.com/2013/10/logo-color.jpg"
            width = "150"></img></a>
	    programmers online: {this.state.usersNumber}
	  </center>
	</h1>
      </div>
    );
  }
}
