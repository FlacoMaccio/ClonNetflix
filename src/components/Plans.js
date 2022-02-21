import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import { NetflixButton } from '../styled/styledcomponents';


const Plans = ({cost, children, color, wide}) => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
       <Typography className={classes.standard} variant='h5'>Email Usuario</Typography>
       <NetflixButton color={color} wide={wide}>Subscribe</NetflixButton>

    </div>



  )
}
const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
      display: "flex",
      justifyContent:"space-between",
      alignItems:"center",
      "& buttom": {
        marginBottom: theme.spacing(2),
      }
      
    },
    standard:{
      fontSize: "1.02rem",
    }
  }));

export default Plans