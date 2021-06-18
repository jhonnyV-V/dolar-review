import React from 'react';
import Display from './Components/Display'
import Header from './Components/Header'
import { Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 50,
  },
}));

function App() {
  const classes = useStyles()
  return (
    <div>
      <Header/>
      <div className={classes.root}>
        <Container>
          <Display/>
        </Container>
      </div>
    </div>
  );
}

export default App;
