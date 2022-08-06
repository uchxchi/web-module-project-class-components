
import React from 'react'

export default class Form extends React.Component {
  constructor () {
    super()
    this.state = {
      inputValue: '',
    }
  }

  handleClick = () => {
    this.props.handleCompletedTodo()
  } 

  onChange = (evt) => {
    this.setState({
      inputValue: evt.target.value
    })

  }

  onSubmit = (evt) => {
    evt.preventDefault()
    this.props.handleAddTodo(this.state.inputValue)
    this.setState({
      inputValue: '',
    })

  }
  render() {
    return (
      <div>
        
        <form onSubmit={this.onSubmit}>
          <div>
              <input
          name='userInput'
          type='text'
          value={this.state.inputValue}
          onChange={this.onChange}
           />
           <button>Add Todo</button>
          </div>       

           <div>
            <button onClick={this.handleClick}>clear completed </button>
           </div>

           
        </form>
      </div>
    )
  }
}
