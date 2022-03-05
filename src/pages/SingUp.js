import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';
import { NetflixButton, NetflixInput } from '../styled/styledcomponents';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';


const SingUp = () => {
  const classes = useStyles();
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");
  const navigate = useNavigate();
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then((authUser)=> navigate.push("/"))
      .cath((err)=>alert(err.message))
  }

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailPassword(email, password)
      .then((authUser)=> navigate.push("/"))
      .cath(err=>alert(err.message))
  }

  return (
  <div className={classes.root}>
    <Typography variant='h5'>
          Sing In
    </Typography>
      <form className={classes.form}>
        <NetflixInput value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          className={classes.email}/>
        <NetflixInput value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}  
          placeholder='Password' 
          className={classes.password}/>
        <NetflixButton onClick={signIn} type='submit' wide="medium" radius> Sign In</NetflixButton>
    <Typography variant='subtitle2'>
      New to Netflix ? {" "}
      <span className={classes.signupLink} onClick={register}>
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