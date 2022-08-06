import React from 'react'

export default class Todo extends React.Component {
  handleToggle = () => {
    this.props.todoToggle(this.props.todoItem.id)
    
  }
  render() {
    return (
      <div onClick={this.handleToggle}>
         <p>{this.props.todoItem.name}</p>
      </div>
    )
  }
}
