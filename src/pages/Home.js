import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Header from '../components/Header';


const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Header/>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    
  },
}));
export default Home