import { Paper } from '@material-ui/core';
import React from 'react';
import { useEffect, useState } from 'react';
import externalApi from '../services/externalApi'
import { formatDate } from './Const'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth:'70vw'
    }
}));

function Display() {
    const [data, setData] = useState({})
    const classes = useStyles()

    useEffect(() => {
        //the API is not mine, if you want to check the source is
        //https://api.exchangedyn.com/free/quotes/usdves
        externalApi.get()
        .then((data)=> {
            console.log(data)
            setData(data.data)
        });
    }, [])


    return(
        //for now this will be the only option available
        //i have planed a few more, like getting prices from a range of dates
        //using my own API that still in development but with also be open source
        <Paper className={classes.root} >
            <p>Fecha: {formatDate(Date())}</p>
            <p>Promedio: {data.average}</p>
        </Paper>
    );
}
export default Display;