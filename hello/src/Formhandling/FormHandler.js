import React, { Component } from 'react'

export class FormHandler extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         usename:""
      }
    }
    changeName=(e)=>
    {
        this.setState(
            {
                usename : e.target.value
            }
        )
    }
    showMsg=()=>
    {
        alert("Hello "+this.state.usename)
        console.log(this.state.usename)
    }
  render() {
    return (
    
        <div>
            UserName:= 
            <input type="text" value={this.state.usename}
            onChange={this.changeName}/>
            <button onClick={this.showMsg}>Submit</button>
        </div> 
      
    )
  }
}

export default FormHandler