import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
       <h2>Todo list</h2> 
      
        {this.props.todo.map(todoItem => (
          <Todo 
          key={todoItem.id}
           todoItem={todoItem} 
           todoToggle={this.props.todoToggle}
           />
        ))}
      </div>
    )
  }
}
