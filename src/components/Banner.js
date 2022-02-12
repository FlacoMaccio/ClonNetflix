import React from 'react'
import { Button, makeStyles, Typography } from '@material-ui/core';
import banner from "../images/banner2lcdp.jpg"


const Banner = () => {
    const classes = useStyles();
    const truncate = (string, n) => string?.length > n ? `${string.substr(0,n-1)}...`:string;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
         <Typography variant='h2' component="h1">
           Movie Title
         </Typography>
         <div className={classes.button}>
            <Button>Play</Button> 
            <Button>My list</Button>  
         </div>
         <Typography style={{wordWrap:"brak-word"}} variant='h6' className={classes.description}>
           {
             truncate("texto ejemplo",160)
           }
           Movie Description
         </Typography> 
        <div className={classes.fadeBottom}/>         
      </div>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
    root: {
      backgroundImage:  `url(${banner})`,
      position: "relative",
      height: "440px",
      objectFit: "contein",
      backgroundSize:"cover",
      backgroundPosition:"center",
      color: "#fff",
    },
    buttons:{
      "& buttton": {
        cursor:"pointer",
        fontWeight:700,
        borderRadius:"25px",
        padding:theme.spacing(1,4,1,4),
        marginRight: "1rem",
        backgroundColor:"rgba(51,51,51,0.5)",
      },
      "& button:hover":{
        color:"#000",
        backgroundColor:"#e6e6e6",
      }   ,   
    },
    fadeBottom: {
      position:"absolute",
      top:"30vh",
      bottom:0
      left:0,
      rigth:0,
      zIndex:99,
      backgroundImage: 
        "linear-gradient(180deg, trasparent, rgba(37,37,37,0.61), #111)",
    }   
  }));

export default Banner