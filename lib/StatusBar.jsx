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

  }, 4000);
}


  render(){
    let styles = {
      color: '#00ff9f'
    };
    let s = {
      width:'700px',
      height:'40px',
      textAlign:'center',
      borderRadius:'10px',
      backgroundColor:'#7e7a85',
      margin: '0px auto'
    }
    return(
      <div style = {s}>
          <h1 style={styles}><center> Professional Programmers Online: {this.state.usersNumber} </center></h1>
      </div>
    )
  }
}
