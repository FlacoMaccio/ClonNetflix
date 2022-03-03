import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { makeStyles } from '@material-ui/styles';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Paypal from './pages/Paypal';
import Home from './pages/Home';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/UserSlice';

function App() {
  const user = useSelector(selectUser);
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(()=> {
   const unsuscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(login ({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout)
      }
   })
    return unsuscribe;
  }, [dispatch])

  return (
    <div className={classes.root}>
      <Router>
        <Routes>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/checkout">
            <Paypal />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
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
