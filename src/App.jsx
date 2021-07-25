import React, { lazy, Suspense } from "react";
import { Container, makeStyles } from '@material-ui/core'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Components/Header/'
import './App.css';

const Display = lazy(() => import('./Components/Display/'));
//const Calculator = lazy(() => import('./Components/Calculator/'));


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
          <BrowserRouter>
            <div>
              <Route exact path="/dolar-review/">
                <Suspense fallback={<div>Loading...</div>}>
                  <Display/>
                </Suspense>
              </Route>
              {/*
              <Route exact path="/Calculator">
                <Suspense fallback={<div>Loading...</div>}>
                  <Calculator/>
                </Suspense>
              </Route>
               */
              }
            </div>
          </BrowserRouter>
        </Container>
      </div>
    </div>
  );
}

export default App;
