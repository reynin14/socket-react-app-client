import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://10.0.1.4:4001",

      ///
      color: 'white'
      ///

    };
  }

  // sending sockets
  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('change color', this.state.color) // change 'red' to this.state.color
  }

  ///

  // adding the function
  setColor = (color) => {
    this.setState({ color })
  }

  ///

  render() {
    // testing for socket connections

    const socket = socketIOClient(this.state.endpoint);
    socket.on('change color', (col) => {
      document.body.style.backgroundColor = col
    })

    return (
      <div style={{ textAlign: "center" }}>
        <button onClick={() => this.send() }>Change Color</button>

        <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
        <button id="red" onClick={() => this.setColor('red')}>Red</button>
        <button id="green" onClick={() => this.setColor('green')}>Green</button>
        <button id="yellow" onClick={() => this.setColor('yellow')}>Yellow</button>
        <button id="black" onClick={() => this.setColor('black')}>Black</button>

      </div>
    )
  }
}
export default Chat;
