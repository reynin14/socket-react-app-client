import React from 'react'
import '../../App.css'

class ChatWindow extends React.Component{
  constructor() {
    super();
    this.state = {
      message: ''
    }
  }

  handleChange = (event) => {

    this.setState({
      message: event.target.value
    })

    console.log(this.state.message);
  }

  render(){
    return(
      <div className='chatWindow'>
        {this.props.chatbox}
        <div>
          <textarea className='chatInput' onChange={this.handleChange}></textarea>
          <div className='chatSubmit'>
            <button onClick={this.props.updateConvo}>Enter</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ChatWindow
