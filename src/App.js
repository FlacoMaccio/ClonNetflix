import React from 'react';
import { Counter } from './features/counter/Counter';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import { makeStyles } from '@material-ui/styles';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Paypal from './pages/Paypal';
import Home from './pages/Home';




function App() {
  const user = "Pepe";
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        {
          !user ? (<Login />) : (
            <Switch>
              <Route path='/profile'>
                  <Profile />
              </Route>
              <Route path='/checkout'>
                  <Paypal />
              </Route>
              <Route path='/'>
                  <Home />
              </Route>
            </Switch>
          )
        }
      </Router>
      
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:"#111",
    minHeight: "100vh",
  },
}));

export default App;
