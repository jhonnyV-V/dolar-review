import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorkerRegistration';
import { createMuiTheme, ThemeProvider, responsiveFontSizes, CssBaseline } from '@material-ui/core';

const theme = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type:'dark',
            primary: {
                main:"#1c1c1c"
            },
            secondary:{
                main:"#fff"
            },
        },
    })
)

ReactDOM.render(<ThemeProvider theme={theme} >
                    <CssBaseline/>
                    <App/>
                </ThemeProvider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();