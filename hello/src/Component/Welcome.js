import React from 'react'
import Greet from '../Greet'

export const Welcome=({name,lastname})=> {
  return (
    <>
    <div id="lwdi">Welcome {name} {lastname} </div>
    <Greet name="Hema"/>
    </>
  )
}