import React, { Component } from 'react'

class Form extends Component {
  constructor(){
    super()
    this.state ={
      username:'',
      comments:'',
      topic: 'react'
    }
  }
  handleUsernameChange = (event) =>{
    this.setState({
      username: event.target.value
    })
  }
  handleCommentChange = (event) =>{
    this.setState({
      comments: event.target.value
    })
  }
  handleTopicChange = (event) =>{
    this.setState({
      topic: event.target.value
    })
  }
  handleSubmit = (event) =>{
      alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
      event.preventDefault()
 }
   render() {
     const {username,comments,topic} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
      <div>
      <label>User Name:</label>
      <input type='text' 
      value={username}
      onChange = {this.handleUsernameChange}
      />
      </div>
      <div>
      <label>Comments:</label>
      <textarea value={comments} onChange={this.handleCommentChange}></textarea>
      </div>
      <div>
      <label>Select:</label>
      <select value={topic} onChange={this.handleTopicChange}>
        <option value='react'>React</option>
        <option value='angular'>Angular</option>
        <option value='vue'>Vue</option>
      </select>
      </div>
      <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form