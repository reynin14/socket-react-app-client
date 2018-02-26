import React from 'react'
import '../../App.css'

class ChatWindow extends React.Component{

  render(){
    return(
      <div className='chatWindow'>
        <div>
          <textarea className='chatInput' onChange={this.props.handleChange}></textarea>
          <div className='chatSubmit'>
            <button onClick={this.props.handleUpdate}>Enter</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ChatWindow
