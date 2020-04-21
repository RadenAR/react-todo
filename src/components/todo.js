import React, { Component } from 'react'

export default class Todo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userInput: '',
      list: []
    }
  }

  changeUserInput (input) {
    this.setState({
      userInput: input
    })
  }

  render () {
    return (
      <div className='todo-main'>
        <input
          onChange={e => this.changeUserInput(e.target.value)}
          value={this.state.userInput}
          type='text'
        />
        <button>Add to list</button>
      </div>
    )
  }
}
