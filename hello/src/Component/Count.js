import React, { Component } from 'react'

export class Count extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         num : 0
      }
    }
    increment =()=>
    {
        this.setState(
            {
                num : this.state.num + 1
            }
        )
    }
    decrement=()=>
    {
        this.setState(

            {
            num : this.state.num -1
            }

        )
        console.log(this);
    }
  render() {
    return (
        <>
      <div>Counter: {this.state.num} </div>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.decrement}>Decrement</button>
      </>
    )
  }
}

export default Count