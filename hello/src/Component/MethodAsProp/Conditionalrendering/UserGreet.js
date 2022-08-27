import React, { Component } from 'react'

export class UserGreet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
  render() {
    
      return this.state.isLoggedIn && <div>Hello Nikhil</div>


      
    
  }
}

export default UserGreet