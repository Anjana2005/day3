import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <AppBar color='primary'>
            <Toolbar>
                <Typography variant='h5'>App</Typography>
                <Button variant='contained'>submit</Button>
            </Toolbar>
        </AppBar>
        <br /><br />
    </div>
  )
}

export default Navbar