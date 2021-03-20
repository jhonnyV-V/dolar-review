import { Paper } from '@material-ui/core';
import React from 'react';
import { useEffect, useState } from 'react';
import externalApi from '../services/externalApi'
import { formatDate, formatNumber, Source } from './Const'
import { makeStyles } from '@material-ui/core/styles';
import BarChar from './BarChar/Barchar';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth:'70vw'
    }
}));

function Display() {
    const [data, setData] = useState({sources:[]})
    const [today,setToday] = useState(formatDate(Date()))
    const classes = useStyles()

    useEffect(() => {
        //the API is not mine, if you want to check the source is
        //https://api.exchangedyn.com/free/quotes/usdves
        externalApi.get()
        .then((data)=> {
            let newData = {average:data.data.average,sources:data.data.sources}
            let sourceData = Object.create(Source)
            newData.sources.map((source)=>{
                sourceData['' +source.name] = source.quote
            })
            sourceData.date = today
            console.log(sourceData)
            newData.sources = [sourceData]
            /*if(newData.sources.length == 1){
                newData.sources.push(sourceData)
            }*/
            setData(newData)
        });
    }, [])


    return(
        //for now this will be the only option available
        //i have planed a few more, like getting prices from a range of dates
        //using my own API that still in development but with also be open source
        <>
            <Paper className={classes.root} >
                <p>Fecha: {today}</p>
                <p>Promedio: {formatNumber(data.average)}</p>
            </Paper>
            <BarChar sources={data.sources} />
        </>
    );
}
export default Display;