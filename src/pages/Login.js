import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import logo from "../images/netflixlogo.png"
import banner from "../images/NetflixBanner.jpg"
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';
import { Typography } from '@material-ui/core';
import SingUp from './SingUp';




const Login = () => {
  const classes = useStyles();
  const {signIn, setSignIn} = useState(false);
  return (
    <div className={classes.root}>
          <img src={logo} alt="logo" className={classes.logo}/>
          <NetflixButton className={classes.session}>Iniciar sesion</NetflixButton>
          <div className={classes.info}>
            {!signIn ? (<SingUp/>) : (            
            <><Typography variant='h4' gutterBottom>
              Unlimited films, tv programs and more.
            </Typography> <Typography variant='h5'>
                Whatch anywhere. Cancel at any time.
              </Typography><Typography variant='h6' gutterBottom>
                Ready t watch? Enter you email to create or restart your membership.
              </Typography><div className={classes.inputBlock}>
                <NetflixInput placeholder='Email address' />
                <NetflixButton>GET STARTED</NetflixButton>
              </div></>
              )}
        </div>         
     </div>
   )
}
const useStyles = makeStyles((theme) => ({
  logo:{
    position:"fixed",
    top:0,
    left:20,
    width:"150px",
    curosr:"pointer",
  },
  root: {
    position: "relative",
    height:"100vh",
    backgroundImage: `url(${banner})`,
    backgroundPosition: "center",
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",
    objectFit: "contain",
    display:"flex",
    justifyContent: "center",
    alignItems:"center",
  },
  session:{
    position: "fixed",
    zIndex:15,
    right:20,
    top:20,
  },
  info:{
    color:"#fff",
    zIndex:15,
    textAlign:"center",
    "& h4" : {
      fontWeight: 800,
    },
    "& h5" : {
      fontWeight: 400,
    },
  },
}));

export default Login