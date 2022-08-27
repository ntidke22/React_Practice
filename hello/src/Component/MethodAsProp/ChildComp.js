import React from 'react'

function ChildComp(props) {
  return (
    <>
    <button onClick={()=>{props.greetHandler()}}>Click Me</button>
    </>
  )
}

export default ChildComp