import React from 'react';
import { Paper, Grid, Typography, makeStyles, } from '@material-ui/core';
import { useEffect, useState } from 'react';
import externalApi from '../services/externalApi'
import { formatDate, formatNumber } from './Const'
import { DataGrid, } from '@material-ui/data-grid';

const useStyles = makeStyles((theme) => ({
    dataGrid:{
        height: 300,
        width: '100%',
    },
}));
const columns = [
    {
        fiel: "id",
        hide: true
    },
    {
        field: "name",
        headerName: "Provedor",
        
    },
    {
        field: "price",
        headerName: "Precio",
        valueFormatter: (params) => formatNumber(params.value),
        
    },
    {
        field: "last_update",
        headerName: "Ultima Actualización",
        valueFormatter: (params) => params.value.split(' ')[0],
        
    }
]

function Display() {
    const [data, setData] = useState({sources:[]});
    const [rows, setRows] = useState([]);
    const classes = useStyles();

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
        setRows(row)
        console.log(quotes.data);
    };
    useEffect(() => {
        //the API is not mine, if you want to check the source is
        //https://api.exchangedyn.com/free/quotes/usdves
        loadContent();
    }, [])

        //for now this will be the only option available
        //i have planed a few more, like getting prices from a range of dates
        //using my own API that still in development but with also be open source

    return(
        <>
            <Paper >
                <Grid container justify='center'>
                    <Grid container justify='center'>
                        <Typography
                        variant='h5'>
                            Fecha: {formatDate(Date())}
                        </Typography>
                    </Grid>
                    <Grid container justify='center'>
                        <Typography
                        variant='h5'>
                            Promedio: {formatNumber(data.average)}
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Grid container justify='center'>
                <DataGrid 
                autoHeight
                columns={columns}
                rows={rows}
                className={classes.dataGrid}  
                />
            </Grid>
        </>
    );
}
export default Display;