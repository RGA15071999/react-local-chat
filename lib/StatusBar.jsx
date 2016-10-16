"use strict";

import React from "react";
import {server_addr} from './globals';

export default
class StatusBar extends React.Component{

  constructor(){
    super();
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
