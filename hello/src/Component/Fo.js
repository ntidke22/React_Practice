import React from "react";
class Fo extends React.Component{
  constructor()
  {
    super()
    this.state = {
      msg : "Enter Values"
    }
  }
  changeMessage()
  {
    this.setState ( {
      msg : "Put in"
    })
  }
    render()
    {
        return(
         <>
            <h3>{this.state.msg}</h3>
          <input type="text"></input>
          <button onClick={()=>this.changeMessage()}>BTN</button>
          </>
        )
    }
}
export default Fo;