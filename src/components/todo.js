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

  addToList (input) {
    const listArray = this.state.list
    listArray.push(input)
    this.setState({
      list: listArray
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
        <button onClick={() => this.addToList(this.state.userInput)}>Add to list</button>

        <ul>
          {this.state.list.map((val, i) => <li key={i}>{val}</li>)}
        </ul>
      </div>
    )
  }
}
