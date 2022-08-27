import React, { Component } from 'react'
import ChildComp from './ChildComp'

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName :"Paarent"
      }
    }

    greet=()=>
    {
        alert('Hello'+ this.state.parentName+ 'By' +{})
    }
  render() {
    return (
      <ChildComp greetHandler={this.greet}/>
    )
  }
}

export default ParentComp