import React from "react";
import { makeStyles } from "@material-ui/styles";
import Header from "../components/Header";
import { Typography } from "@material-ui/core";
import profilelogo from "../images/profilelogo.png";
import Plans from "../components/Plans";
import { NetflixButton } from "../styled/styledcomponents";

const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Typography variant="h3">Edite Profile</Typography>
        <div className={classes.info}>
          <img src={profilelogo} alt="avatar" />
          <div className={classes.details}>
            <div className={classes.plans}>
              <Typography variant="h6">Email Usuario</Typography>
              <Typography className={classes.plansText} variant="h5" gutterBottom>
                Plans
              </Typography>
              <Plans coste={500}>Netflix Standard</Plans>
              <Plans coste={1000}>Netflix Basic</Plans>
              <Plans wide="mediumwidth" color="gray" coste={1500}>Netflix Premium</Plans>
              <NetflixButton wide="fullwidth">Sign Out</NetflixButton>
            </div>
          </div>
        </div>
      </div>
  );
};
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexdirection:"column",
    alingItems:"center",
  },
  info: {
    width:"80%",
    display:"flex",
    "& img": {
      height:"100px",
      [theme.breackpoints.down("sm")]: {
        display:"none"
      }
    }
  },
  details: {
    width: "100%",
    marginLeft:theme.spacing(3),
    "& h6":{
       backgroundColor:"#aaa",
       padding: theme.spacing(1),
       marginBottom: theme.spacing(1),
       fontSize:"18px",
    },
  },
  plans:{
    widht: "100%",
  },
  plansText:{
    borderBottom:"1px solid lightgray",
  },

}));

export default Profile;
