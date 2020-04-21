import React, { Component } from 'react'

export default class Todo extends Component {
  constructor (props) {
    super(props)

    this.state = {
      userInput: '',
      list: []
    }
  }

  render () {
    return (
      <div>
          The List goes here
      </div>
    )
  }
}
