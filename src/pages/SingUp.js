import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';


const SingUp = () => {
  const classes = useStyles();
  return (
  <div className={classes.root}>
    <Typography variant='h5'>
          Sing In
    </Typography>
      <form className={classes.form}>
        <NetflixInput  placeholder='Email' className={classes.email}/>
        <NetflixInput placeholder='Password' className={classes.password}/>
        <NetflixButton wide="medium" radius> Sign In</NetflixButton>
    <Typography variant='subtitle2'>
      New to Netflix ? {" "}
      <span className={classes.signupLink}>
         Sign  Up Now.{" "}
      </span>
    </Typography>

      </form>
  </div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "350px",
    width: "20rem",
    height: "25rem",
    background: "rgba(0,0,0,0.65)",
    display: "flex",
    flexDirection:"colum",
    justifyContent:"space-evenly",
    alingItems:"center",
    "& h5": {
       marginTop: theme.spacing(2),
       width:"70%",
    },
  form: {
    width: "80%",
  },
  email:{
    marginBottom: theme.spacing(2),
  },
  password:{
    marginBottom: theme.spacing(4),
  },
  signupLink: {
    color:"#fff",
    cursor:"pointer",
    "&:hover":{
      TextDecoration:"underline",
    },
  }
  },
}));

export default SingUp