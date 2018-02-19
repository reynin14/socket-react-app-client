import React from 'react'
import '../../App.css'

class ChatWindow extends React.Component{
  render(){
    return(
      <div className='chatWindow'>
        <div>
          <textarea className='chatInput'></textarea>
          <div className='chatSubmit'>
            <button>Enter</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ChatWindow
