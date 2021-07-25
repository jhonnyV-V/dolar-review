import React, { lazy, Suspense, useState, useContext, useEffect } from "react";
import { Container, makeStyles } from '@material-ui/core'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header/'
import { ContextProvider } from './AppContext';
import externalApi from './services/externalApi';
import './App.css';

const Display = lazy(() => import('./Components/Display/'));
const Calculator = lazy(() => import('./Components/Calculator/'));


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 50,
  },
}));

function App() {
  const classes = useStyles()
  const [data, setData] = useState({sources:[]});
  const [rows, setRows] = useState([]);

  const loadContent = async () => {
    const quotes = await externalApi.get();
    setData(quotes.data);
    let row = []
    quotes.data.sources.forEach((source, index) =>{
        row.push({
            id: index,
            name: source.name,
            price: source.quote,
            last_update: source.last_retrieved
        });
    });
    row.sort((a,b) => new Date(b.last_update) - new Date(a.last_update) )
    setRows(row)
    console.log(quotes.data);
  };

  useEffect(() => {
    //the API is not mine, if you want to check the source is
    //https://api.exchangedyn.com/free/quotes/usdves
    loadContent();
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Header/>
        <div className={classes.root}>
          <Container>
            <div>
              <ContextProvider value={{rows, data}}>

                <Route exact path="/dolar-review/">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Display/>
                  </Suspense>
                </Route>

                <Route exact path="/dolar-review/calculator">
                  <Suspense fallback={<div>Loading...</div>}>
                    <Calculator/>
                  </Suspense>
                </Route>

              </ContextProvider>
            </div>
          </Container>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
