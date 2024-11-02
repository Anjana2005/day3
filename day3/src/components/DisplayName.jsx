import { Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'

const DisplayName = () => {
    var[x,setButton]=useState();
   const inpt =() =>{
    setButton("React");
   }
   const inpt2 =() =>{
    setButton("Angular");
   }
   const Next =() =>{
    setButton("Next");
   } 
   //use effect
   useEffect(() => {
    inpt2()
   },[])
  return (
    <div>
        
        <Typography variant='h5'>Welcome to: {x}</Typography>
        <Button variant='contained' color='primary' onClick={inpt}>REACT</Button> &nbsp;
        <Button variant='contained' color='success' onClick={inpt2}>ANGULAR</Button> &nbsp;
        <Button variant='contained' color='success' onClick={Next}>NEXT</Button> &nbsp;
        
        </div>
  )

}

export default DisplayName
