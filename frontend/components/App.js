import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

const todo = [
  {
    name: 'Wash clothes',
    id: 112,
    completed: false,
  },
  {
    name: 'Feed baby',
    id: 113,
    completed: false,
  },
  {
    name: 'Moisturize',
    id: 114,
    completed: false,
  }
]

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todo: todo,
      
    }
  }
  todoToggle = (todoId) => {
    this.setState({
      todo: this.state.todo.map(todoItems => {
        if (todoItems.id === todoId){
          return{
            ...todoItems,
            completed: !todoItems.completed
          }
        }
        return (todoItems)
      })
    })
  }
  handleAddTodo = (taskName) => {
    const task = {
      name: taskName,
      id: this.state.todo.length,
      completed: false,
    }
    const newTodo = [...this.state.todo, task]
    this.setState({
      todo: newTodo
    })
   
  }

  handleCompletedTodo = () => {
    const newTodo = this.state.todo.filter(task => {
      return(!task.completed)
    })
    this.setState({
      todo: newTodo,
    })
  }
  render() {
    return (
      <div>   
        <TodoList todoToggle={this.todoToggle} todo={this.state.todo} />
        <Form
        handleAddTodo={this.handleAddTodo}
        handleCompletedTodo={this.handleCompletedTodo}
         />
      </div>
    )
  }
}
