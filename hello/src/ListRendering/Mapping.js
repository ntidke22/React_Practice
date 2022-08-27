import React from 'react'

function Mapping() {
   const list = ["Nikhil","Amar","kiran"]
  return (
    <div>
        {
            list.map(x=><button>{x}</button>)
        }
    </div>
  )
}

export default Mapping