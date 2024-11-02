import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[count,setcount]=useState(0);
    const Add =() =>{
        console.log("add button clicked");
        setcount(count+1)
    }
        const Sub = () =>{
            console.log("sub button clicked");
            setcount(count-1)
        }
    
   
  return (
    <div>
        <Typography variant='h5'>Count:{count}</Typography>
        <Button variant='contained' color='success' onClick={Add}>+</Button> &nbsp; &nbsp;

        <Button variant='outlined' color='success' onClick={Sub}>-</Button>
    </div>
  )
}

export default Counter