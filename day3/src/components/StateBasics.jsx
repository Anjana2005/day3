import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
   
   var[name,setname]=useState()
   var[val,setval]=useState()

   const handleInput =(g) =>{
    console.log(g.target.value)
    setname(g.target.value)
   }
   const Submit=()=>{
    setval(name)
   }
   
   
  return (
    <div>
        <Typography variant='h5'>
            Welcome {val}
        </Typography>
        <TextField variant='outlined' onChange={handleInput} label='Enter name'/><br /><br />
        <Button variant='text' onClick={Submit}>Submit</Button>

    </div>
  )
}

export default StateBasics