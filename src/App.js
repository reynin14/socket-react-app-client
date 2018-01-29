import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'

// Making the App component
class App extends Component {
  constructor() {
    super()

  }

  // render method that renders in code if the state is updated
  render() {
    return (
      <div>
        <p>Making sure this works</p>
      </div>
    )
  }
}

export default App
