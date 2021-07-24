import React from 'react';
import { 
    Paper, 
    Grid, 
    Typography, 
    Table, 
    TableCell, 
    TableRow, 
    TableHead, 
    TableBody, 
    TableContainer,
    useMediaQuery,
    makeStyles, 
} from '@material-ui/core';
import { useEffect, useState } from 'react';
import externalApi from '../services/externalApi'
import { formatDate, formatNumber } from './Const'

const useStyles = makeStyles((theme) => ({
    dataGrid:{
        height: 300,
        width: '100%',
    },
    avegeragePaper: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
    },
}));

function Display() {
    const classes = useStyles();
    const [data, setData] = useState({sources:[]});
    const [rows, setRows] = useState([]);
    const isSmallScreen = useMediaQuery('(max-width:669px)');

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
            <Paper className={classes.avegeragePaper}>
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
                <TableContainer component={Paper}>
                  <Table className={classes.table} 
                  size={isSmallScreen?'small': 'medium' } 
                  aria-label="tabla de precios del dolar">
                    <TableHead>
                      <TableRow>
                        <TableCell>Proveedor</TableCell>
                        <TableCell >Precio</TableCell>
                        <TableCell >Ultima&nbsp;Actualización</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell >{formatNumber(row.price)}</TableCell>
                          <TableCell >{row.last_update}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
            </Grid>
        </>
    );
}
export default Display;