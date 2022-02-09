import React from 'react'
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import logo from "../images/netflixlogo.png"


const Header = () => {
    const classes = useStyles();
  return (
    <AppBar position="sticky">
        <Toolbar> 
            <img src={logo} alt="logo" className={classes.logo}/>
        </Toolbar>
    

    </AppBar>
  )
}
const useStyles = makeStyles((theme) => ({
     logo: {
          width: "100px",
          cursor: "pointer",      
        },
  }));

export default Header