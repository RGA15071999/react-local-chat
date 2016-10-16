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
	    <em><a href={'https://iteratehackerspace.github.io'}>
		iterate hackerspace</a>
	    </em>
	    programmers online: {this.props.users}
	  </center>
	</h1>
      </div>
    );
  }
}
