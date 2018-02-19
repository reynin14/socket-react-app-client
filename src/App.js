import React, { Component } from "react";
import socketIOClient from "socket.io-client";

import Chat from './components/main/Chat'

class App extends Component {
  render() {

    return (
      <div>
        <Chat />
      </div>
    )
  }
}
export default App;
