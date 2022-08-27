import React from "react";
function Greet(props)
{
    
    console.log(props);
 
    return <h1>Hello Greeting {props.name} {props.lastname}!!!</h1>
}

export default Greet;