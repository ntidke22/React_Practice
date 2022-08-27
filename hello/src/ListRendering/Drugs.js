import React, { useState } from 'react'

function Drugs() {
    const drugs = [
        {
            name:'MD',
            price:3000,
            stock:true
        },
        {
            name:'Cocain',
            price:5000,
            stock:false
        },
        {
            name:'Weed',
            price:500,
            stock:true
        },
        {
            name:'Whitner',
            price:50,
            stock:false
        },
        {
            name:'SwamiNus',
            price:5,
            stock:true
        }

    ]
    const [stockIn,setStockIn] = useState("")
    const [stockOut,setStockOut] = useState("")
    const isStock =  drugs.filter(x=>x.stock)
    const outofStock =  drugs.filter(x=>!x.stock)
   const inStock=()=>{
        setStockIn(isStock.map(x=><h2>{x.name}<br/></h2>))
    }
    
   const outStock=()=>{
         setStockOut(outofStock.map(x=><h2>{x.name}<br/></h2>))
    }
  return (
    <div>
        <button onClick={inStock}>IN-STOCK</button>
        <button onClick={outStock}>OUT-STOCK</button>
        <br/>
        <label>STOCK_IN</label>
         {stockIn}
         <br/>
        <label>STOCK_OUT</label>
        {stockOut}
    </div>

  )
}

export default Drugs