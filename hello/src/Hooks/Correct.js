import React, { useState } from 'react'

function Correct() {
    const [count,setCount] = useState(0)
   
  return (
    <div>
      COUNTER: {count}
      <br/>
        <button onClick={()=>{setCount(count+1)}}>INCREMENT</button>
        <button onClick={()=>{setCount(count-1)}}>DECREMENT</button>
    </div>
  )
}

export default Correct;